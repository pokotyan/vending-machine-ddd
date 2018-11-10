import { injectable } from 'inversify';
import IItemRepository from './interface'

@injectable()
class ItemRepository implements IItemRepository {
  getStockItems() {
    return [
      {
        name: 'ソーダ',
        price: 100,
        type: 'drink',
        temperatureType: 'cold'
      },
      {
        name: '水',
        price: 100,
        type: 'drink',
        temperatureType: 'cold',
      }
    ]
  }
}

export default ItemRepository;

