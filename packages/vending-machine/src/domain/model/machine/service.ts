import MachineModel from './index';
import InletModel from '../inlet';
import MoneyModel from '../money';

export const setInlets = ({ machineModel, inlets }: {
  machineModel: MachineModel;
  inlets: InletModel[];
}): void => {
  machineModel.inlets = inlets.map(inlet => new InletModel(inlet));
}

export const setPaid = ({ machineModel, paidAmount }: {
  machineModel: MachineModel;
  paidAmount: MoneyModel;
}): void => {
  machineModel.paidAmount = paidAmount;
}

export const setSales = ({ machineModel, sales }: {
  machineModel: MachineModel;
  sales: MoneyModel;
}): void => {
  machineModel.sales = sales;
}
