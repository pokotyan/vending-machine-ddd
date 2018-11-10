import ItemModel from '../../domain/model/item';

export default interface IItemRepository {
  getStockItems(): ItemModel[];
};
