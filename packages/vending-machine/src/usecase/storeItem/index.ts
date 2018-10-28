import { injectable, inject } from 'inversify';
import IUseCaseStoreItem from './interface';
import { lazyInject } from '../../inversify.decorator'

import IInputStoreItem from '../@input/storeItem/interface'
import { TYPES as TInputStoreItem } from '../@input/storeItem/type';

import ItemModel from '../../domain/model/item';

@injectable()
export default class StoreItem implements IUseCaseStoreItem {
  @lazyInject(TInputStoreItem.onlyDrink) public _input: IInputStoreItem;

  main(items): ItemModel[]{
    const inputItems: ItemModel[] = this._input.onlyDrink(items);

    return inputItems;
  }
}

