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
        temperatureType: 'cold',
        maxStockNumber: 10,
        currentStockNumber: 0,
        stock: []
      }, {
        id: 2,
        type: 'drink',
        itemName: 'コンポタ',
        temperatureType: 'hot',
        maxStockNumber: 10,
        currentStockNumber: 0,
        stock: []
      }]
    } 
  }
}

export default Machine;
