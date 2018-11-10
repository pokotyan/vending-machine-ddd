

import { injectable, inject } from 'inversify';
import { lazyInject } from '../../inversify.decorator'

import IMachineUseCase from './interface';

import * as Service from '../../domain/model/service';

import IInletRepository from '../../repository/inlet/interface'
import { TYPES as TInletRepository } from '../../repository/inlet/type';

import IItemRepository from '../../repository/item/interface'
import { TYPES as TItemRepository } from '../../repository/item/type';

import IMachineRepository from '../../repository/machine/interface'
import { TYPES as TMachineRepository } from '../../repository/machine/type';

import InletModel from '../../domain/model/inlet';
import MachineModel from '../../domain/model/machine';
import * as MachineService from '../../domain/model/machine/service';

@injectable()
export default class MachineUseCase implements IMachineUseCase {
  @lazyInject(TInletRepository.inletRepository) public _inletRepository: IInletRepository;
  @lazyInject(TItemRepository.itemRepository) public _itemRepository: IItemRepository;
  @lazyInject(TMachineRepository.machineRepository) public _machineRepository: IMachineRepository;

  private _machine: MachineModel;

  public constructor() {
    this._machine = new MachineModel();
  }

  initFromDB(): MachineModel {
    const {
      inlets
    } = this._machineRepository.getCurrentStatus();

    MachineService.setInlets({ machineModel: this._machine, inlets })

    return this._machine;
  }

  setInlet(inlets: InletModel[]): MachineModel {
    // 永続化
    this._inletRepository.set(inlets);

    // ui側で使うマシーンモデルの更新
    MachineService.setInlets({ machineModel: this._machine, inlets })

    return this._machine;
  }

  // itemリポジトリから在庫を取得。
  // その在庫を投入口に入れていく。
  storedItem(inlet) {
    const stockItems = this._itemRepository.getStockItems();

    console.log(stockItems);

    stockItems.forEach(stockItem => {
      Service.InletService.setStock(inlet, stockItem).catch(() => {});
    });

    return this._machine;
  }
}

