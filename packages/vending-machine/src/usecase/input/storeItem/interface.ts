import ItemModel from '../../../domain/model/item';

export default interface IInputStoreItem {
  onlyDrink(items: ItemModel[]): ItemModel[];
};
