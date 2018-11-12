

import { injectable, inject } from 'inversify';
import { lazyInject } from '../../inversify.decorator'

import IMachineUseCase from './interface';

import * as Service from '../../domain/model/service';

import IInletRepository from '../../repository/inlet/interface'
import { TYPES as TInletRepository } from '../../repository/inlet/type';

import IItemRepository from '../../repository/item/interface'
import { TYPES as TItemRepository } from '../../repository/item/type';

import ISalesRepository from '../../repository/sales/interface'
import { TYPES as TSalesRepository } from '../../repository/sales/type';

// import IMachineRepository from '../../repository/machine/interface'
// import { TYPES as TMachineRepository } from '../../repository/machine/type';

import InletModel from '../../domain/model/inlet';
import MoneyModel from '../../domain/model/money';
import MachineModel from '../../domain/model/machine';

@injectable()
export default class MachineUseCase implements IMachineUseCase {
  @lazyInject(TInletRepository.inletRepository) public _inletRepository: IInletRepository;
  @lazyInject(TItemRepository.itemRepository) public _itemRepository: IItemRepository;
  @lazyInject(TSalesRepository.salesRepository) public _salesRepository: ISalesRepository;
  // @lazyInject(TMachineRepository.machineRepository) public _machineRepository: IMachineRepository;

  private _machine: MachineModel;

  public constructor() {
    this._machine = new MachineModel();
  }

  initFromDB(): MachineModel {
    const inlets = this._inletRepository.getCurrentStatus();
    const sales = this._salesRepository.getCurrentStatus();

    Service.Machine.setInlets({ machineModel: this._machine, inlets })
    Service.Machine.setSales({ machineModel: this._machine, sales })

    return this._machine;
  }

  setInlet(inlets: InletModel[]): MachineModel {
    // 永続化
    this._inletRepository.set(inlets);

    // ui側で使うマシーンモデルの更新
    Service.Machine.setInlets({ machineModel: this._machine, inlets })

    return this._machine;
  }

  // itemリポジトリから在庫を取得。
  // その在庫を投入口に入れていく。
  storedItem(inlet: InletModel): MachineModel {
    const stockItems = this._itemRepository.getStockItems();

    stockItems.forEach(stockItem => {
      Service.Inlet.setStock(inlet, stockItem).catch(() => {});
    });

    return this._machine;
  }

  pay(money: MoneyModel): MachineModel {
    Service.Machine.setPaid({ machineModel: this._machine, paidAmount: money });

    return this._machine;
  }

  buyingItem({ inletId }) {
    const isPurchaseAvailable = Service.Inlet.isPurchaseAvailable({ machine: this._machine, inletId });

    if (isPurchaseAvailable) {
      Service.Inlet.releaseStock({ machine: this._machine, inletId })    
      Service.Sales.addSales({ machine: this._machine, inletId });
    } else {
      console.log(`投入口${inletId}のアイテムは売り切れ、もしくは投入金額が足りません`);
    }
  }
}

