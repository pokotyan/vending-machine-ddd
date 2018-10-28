import { injectable, inject, LazyServiceIdentifer } from 'inversify';
import { lazyInject } from '../../../inversify.decorator'

import MachineModel from './interface';

import { TYPES as TUseCase } from '../../../usecase/type';
import IUseCaseStoreItem from '../../../usecase/storeItem/interface'
import IUseCaseInlet from '../../../usecase/inlet/interface'

import ItemModel from '../../../domain/model/item/interface';
import InletModel from '../../../domain/model/inlet/interface';

@injectable()
class Machine implements MachineModel {
  @lazyInject(TUseCase.StoreItem) public _storedItem: IUseCaseStoreItem;
  @lazyInject(TUseCase.Inlet) public _setInlet: IUseCaseInlet;

  stock: ItemModel[];
  inlets: InletModel[];
  numberOfInlet: number;

  constructor() {
    this.stock = [];
    this.inlets = [];
    this.numberOfInlet = 2;
  }

  setInlets(inlets: InletModel[]) {
    this.inlets = this._setInlet.init(inlets, this.numberOfInlet)
  }

  storedItem(items: ItemModel[]) {
    const storedItems = this._storedItem.main(items);

    this.stock = storedItems
  }
}

export default Machine;
