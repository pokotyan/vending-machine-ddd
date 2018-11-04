

import { injectable, inject } from 'inversify';
import { lazyInject } from '../../inversify.decorator'


import IMachineUseCase from './interface';


import IInletRepository from '../../repository/inlet/interface'
import { TYPES as TInletRepository } from '../../repository/inlet/type';

import IMachineRepository from '../../repository/machine/interface'
import { TYPES as TMachineRepository } from '../../repository/machine/type';

import InletModel from '../../domain/model/inlet';
import MachineModel from '../../domain/model/machine';
import IMachineModel from '../../domain/model/machine/interface';

@injectable()
export default class MachineUseCase implements IMachineUseCase {
  @lazyInject(TInletRepository.set) public _inletRepository: IInletRepository;
  @lazyInject(TMachineRepository.getCurrentStatus) public _machineRepository: IMachineRepository;

  private _machine: MachineModel;

  public constructor(
    @inject("Newable<Machine>") _machine: MachineModel
  ) {
      this._machine = new MachineModel();
  }

  initFromDB(): IMachineModel {
    const {
      inlets
    } = this._machineRepository.getCurrentStatus();

    this._machine.setInlets(inlets);

    return this._machine;
  }

  setInlet(inlets: InletModel[]): IMachineModel {
    // 永続化
    this._inletRepository.set(inlets);

    // ui側で使うマシーンモデルの更新
    this._machine.setInlets(inlets);

    return this._machine;
  }

  // storedItem() {
  //   itemリポジトリから在庫を取得。
  //   その在庫を投入口に入れていく。投入口に入れれるアイテムの判定は以下。
  //   投入口がいっぱいじゃない && アイテムの名前と投入口の名前が一致 && 冷たい、暖かいの判定が一致
  // }
}

