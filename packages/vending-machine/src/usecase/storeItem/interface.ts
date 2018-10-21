import ItemModel from '../../domain/model/item'

export default interface IUseCaseStoreItem {
  main(items: ItemModel[]): ItemModel[];
};
