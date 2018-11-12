import MachineModel from '../machine';

export const addSales = ({ machine, inletId }: {
  machine: MachineModel;
  inletId: number;
}) => {
  const inlet = machine.inlets.find(inlet => inlet.id === inletId);

  // @todo お釣りのことを考える。現在投入された金額を全て売り上げにしている。
  Object.keys(machine.paidAmount).forEach(price => {
    machine.sales[price] += machine.paidAmount[price];
    machine.paidAmount[price] = 0;
  });
};
