import MachineModel from '../machine';
import * as Service from '../service';

export const addSales = ({ machine, inletId }: {
  machine: MachineModel;
  inletId: number;
}) => {
  // お釣りの金額計算
  const inlet = machine.inlets.find(inlet => inlet.id === inletId);
  const totalPaidAmount = Service.Money.calcTotalPrice(machine, 'paidAmount');
  const totalSales = Service.Money.calcTotalPrice(machine, 'sales');
  const itemPrice = inlet.price;
  let changePrice = totalPaidAmount - itemPrice;

  // 一旦、投入金額をすべて売り上げに計上
  Object.keys(machine.paidAmount).forEach(price => {
    machine.sales[price] += machine.paidAmount[price];
    machine.paidAmount[price] = 0;
  });

  if (changePrice > totalSales) {
    console.log('お釣りの金額が自販機内の全金額以上です');
  }

  // 売り上げからお釣り分を減額し、その分はmachine.changeに割り当てる
  // @todo お釣りをそもそも現在の在庫で払えるかというチェックが必要
  Service.Change.calcChange({
    changePrice,
    machine
  });
};
