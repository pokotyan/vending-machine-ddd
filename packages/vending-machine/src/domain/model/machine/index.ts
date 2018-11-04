import { injectable, inject, LazyServiceIdentifer } from 'inversify';
import { lazyInject } from '../../../inversify.decorator'

import MachineModel from './interface';

import { TYPES as TUseCase } from '../../../usecase/type';

import ItemModel from '../../../domain/model/item/interface';
import IInletModel from '../../../domain/model/inlet/interface';
import InletModel from '../../../domain/model/inlet';

// @injectable()
class Machine implements MachineModel {
  inlets: IInletModel[];
  numberOfInlet: number;

  constructor() {
    this.inlets = [];
    this.numberOfInlet = 2;
  }

  setInlets(inlets: IInletModel[]) {
    this.inlets = inlets.map(inlet => new InletModel(inlet));
  }
}

export default Machine;
