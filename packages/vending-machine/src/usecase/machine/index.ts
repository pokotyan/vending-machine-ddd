import { injectable } from 'inversify';
import { plainToClass } from 'class-transformer';
import { lazyInject } from '../../inversify.decorator'

import IMachineUseCase from './interface';

import * as Service from '../../domain/model/service';

import IInletRepository from '../../repository/inlet/interface'
import { TYPES as TInletRepository } from '../../repository/inlet/type';

import IItemRepository from '../../repository/item/interface'
import { TYPES as TItemRepository } from '../../repository/item/type';

import ISalesRepository from '../../repository/sales/interface'
import { TYPES as TSalesRepository } from '../../repository/sales/type';

import InletModel from '../../domain/model/inlet';
import MoneyModel from '../../domain/model/money';
import MachineModel from '../../domain/model/machine';

@injectable()
export default class MachineUseCase implements IMachineUseCase {
  @lazyInject(TInletRepository.inletRepository) private _inletRepository: IInletRepository;
  @lazyInject(TItemRepository.itemRepository) private _itemRepository: IItemRepository;
  @lazyInject(TSalesRepository.salesRepository) private _salesRepository: ISalesRepository;

  machine: MachineModel;

  constructor() {
    this.machine = new MachineModel();
  }

  _setMachineModel() {
    this.machine = plainToClass(MachineModel, this.machine)
  }

  initFromDB(): MachineModel {
    const inlets = this._inletRepository.getCurrentStatus();
    const sales = this._salesRepository.getCurrentStatus();
    // const paidAmount = this._inletRepository.getCurrentPaidAmount(); // @todo 投入額とお釣りも現在の状態をdbからとってくる?
    // const change = this._salesRepository.getCurrentChange();
    
    this.machine.setInlets({ inlets });
    this.machine.setSales({ sales });
    this.machine.setPaidAmount({}); // dbからとってくるならここにとってきた値を渡す
    this.machine.setChange();

    this._setMachineModel();

    return this.machine;
  }

  setInlet(inlets: InletModel[]): MachineModel {
    // 永続化
    this._inletRepository.set(inlets);

    // ui側で使うマシーンモデルの更新
    this.machine.setInlets({ inlets });

    this._setMachineModel();
   
    return this.machine;
  }

  // itemリポジトリから在庫を取得。
  // その在庫を投入口に入れていく。
  storedItem({ inletId }: { inletId: number }): MachineModel {
    const inlet = this.machine.inlets.find(inlet => inlet.id === inletId);
    const stockItems = this._itemRepository.getStockItems();

    stockItems.forEach(stockItem => {
      Service.Inlet.setStock(inlet, stockItem).catch(() => {});
    });

    this._setMachineModel();

    return this.machine;
  }

  pay(money: MoneyModel): MachineModel {
    this.machine.setPaidAmount({ paidAmount: money });

    this._setMachineModel();

    return this.machine;
  }

  buyingItem({ inletId }) {
    const isPurchaseAvailable = Service.Inlet.isPurchaseAvailable({ machine: this.machine, inletId });

    if (isPurchaseAvailable) {
      Service.Inlet.releaseStock({ machine: this.machine, inletId })    
      Service.Sales.addSales({ machine: this.machine, inletId });
    } else {
      console.log(`投入口${inletId}のアイテムは売り切れ、もしくは投入金額が足りません`);
    }

    this._setMachineModel();

    return this.machine;
  }

  // 支払いの取り消しバーの処理。現在投入されている金額を全てお釣りとして排出させる
  abort() {
    Service.Change.abort({ machine: this.machine });

    this._setMachineModel();

    return this.machine;
  }
}

