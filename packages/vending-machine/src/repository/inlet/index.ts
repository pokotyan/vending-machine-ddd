import { injectable } from 'inversify';
import IInletRepository from './interface'

@injectable()
class InletRepository implements IInletRepository {
  set(inlets) {
    // 引数で渡ってきたinletsを永続保存する処理
  }

  getCurrentStatus() {
    // @todo dbから取ってくる
    return [
      {
        id: 1,
        type: 'drink',
        itemName: 'cola',
        price: 120,
        temperatureType: 'cold',
        maxStockNumber: 10,
        currentStockNumber: 0,
        stock: []
      }, {
        id: 2,
        type: 'drink',
        itemName: 'コンポタ',
        price: 130,
        temperatureType: 'hot',
        maxStockNumber: 10,
        currentStockNumber: 0,
        stock: []
      }
    ];
  }
}

export default InletRepository;

