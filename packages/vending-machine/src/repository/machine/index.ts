import { injectable, inject, LazyServiceIdentifer } from 'inversify';
import { lazyInject } from '../../inversify.decorator'

import MachineModel from '../../domain/model/machine';

import IUseCaseStoreItem from '../../usecase/storeItem/interface'
import { TYPES as TUseCase } from '../../usecase/storeItem/type';

import ItemModel from '../../domain/model/item';

@injectable()
class Machine implements MachineModel {
  @lazyInject(TUseCase.UseCase) public _storedItem: IUseCaseStoreItem;

  stock: ItemModel[];

  constructor() {
    this.stock = [];
  }

  storedItem(items: ItemModel[]) {
    const storedItems = this._storedItem.main(items);

    this.stock = storedItems
  }
}

export default Machine;
