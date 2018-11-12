import MachineModel from '../machine';
import InletModel from '../inlet';
import MoneyModel from '../money';

export const calcTotalPrice = (machineModel: MachineModel, property: 'sales' | 'paidAmount'): number => {
  let totalPrice = 0;

  Object.keys(machineModel[property]).forEach(price => {
    totalPrice += (parseInt(price, 10) * machineModel[property][price]);
  });

  return totalPrice;
}
