import container from './inversify.config'
import MachineModel from './domain/model/machine';
import { TYPES } from './repository/machine/type';

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

console.log(machine);


export default machine;
