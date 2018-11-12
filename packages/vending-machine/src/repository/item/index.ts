import { injectable } from 'inversify';
import IItemRepository from './interface'

@injectable()
class ItemRepository implements IItemRepository {
  getStockItems() {
    return [
      {
        name: 'コーラ',
        type: 'drink',
        temperatureType: 'cold'
      },
      {
        name: '水',
        type: 'drink',
        temperatureType: 'cold',
      }
    ]
  }
}

export default ItemRepository;

