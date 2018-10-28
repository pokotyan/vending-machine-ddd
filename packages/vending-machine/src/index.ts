import container from './inversify.config'
import MachineModel from './domain/model/machine';
import { TYPES } from './domain/model/machine/type';

const machine = container.get<MachineModel>(TYPES.Machine);

machine.setInlets([{
  type: 'drink',
  itemName: 'cola',
  isColdable: true,
  isHottable: false,
  maxStockNumber: 10,
  currentStockNumber: 0,
}, {
  type: 'drink',
  itemName: 'コンポタ',
  isColdable: false,
  isHottable: true,
  maxStockNumber: 10,
  currentStockNumber: 0,
}]);

machine.storedItem([{
  name: 'chocolate',
  price: 100,
  type: 'food',
  isColdable: null,
  isHottable: null
},{
  name: 'cola',
  price: 100,
  type: 'drink',
  isColdable: false,
  isHottable: true,
}]);

console.log(machine);
console.log(machine.inlets[0].isSoldOut());

export default machine;
