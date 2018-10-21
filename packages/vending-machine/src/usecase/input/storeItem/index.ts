import { injectable, inject } from 'inversify';
import IInputStoreItem from './interface';
import ItemModel from '../../../domain/model/item';

@injectable()
class StoreItem implements IInputStoreItem {
  onlyDrink(items: ItemModel[]) :ItemModel[] {
    const inputItems: ItemModel[] = items.filter(item => item.type === 'drink')

    return inputItems;
  }
}

export default StoreItem
