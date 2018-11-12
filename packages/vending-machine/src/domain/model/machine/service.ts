import MachineModel from './index';
import InletModel from '../inlet';
import MoneyModel from '../money';

const moneyType = ['10', '50', '100', '500', '1000'];

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
  moneyType.forEach(price => {
    if (!Object.keys(paidAmount).includes(price)) {
      paidAmount[price] = 0;
    };
  })

  machineModel.paidAmount = paidAmount;
}

export const setSales = ({ machineModel, sales }: {
  machineModel: MachineModel;
  sales: MoneyModel;
}): void => {
  machineModel.sales = sales;
}
