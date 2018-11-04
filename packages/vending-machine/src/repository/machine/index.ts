import { injectable, inject, LazyServiceIdentifer } from 'inversify';
import IMachineRepository from './interface'

@injectable()
class Machine implements IMachineRepository {
  getCurrentStatus() {
    // @todo dbから取ってくる
    return {
      inlets: [{
        id: 1,
        type: 'drink',
        itemName: 'cola',
        isColdable: true,
        isHottable: null,
        maxStockNumber: 10,
        currentStockNumber: 0,
        stock: []
      }, {
        id: 2,
        type: 'drink',
        itemName: 'コンポタ',
        isColdable: null,
        isHottable: true,
        maxStockNumber: 10,
        currentStockNumber: 0,
        stock: []
      }]
    } 
  }
}

export default Machine;
