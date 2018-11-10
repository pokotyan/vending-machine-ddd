import MachineModel from '../machine';
import InletModel from '../inlet';
import MoneyModel from '../money';

export const calcTotalPayments = (machineModel: MachineModel): number => {
  let totalPaidAmount = 0;

  Object.keys(machineModel.paidAmount).forEach(price => {
    totalPaidAmount += (parseInt(price, 10) * machineModel.paidAmount[price]);
  });

  return totalPaidAmount;
}
