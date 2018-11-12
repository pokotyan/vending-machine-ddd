import MachineModel from '../machine';
import * as Service from '../service';

export const addSales = ({ machine, inletId }: {
  machine: MachineModel;
  inletId: number;
}) => {
  const inlet = machine.inlets.find(inlet => inlet.id === inletId);

  const totalPaidAmount = Service.Money.calcTotalPrice(machine, 'paidAmount');
  const totalSales = Service.Money.calcTotalPrice(machine, 'sales');
  const itemPrice = inlet.price;
  let changePrice = totalPaidAmount - itemPrice;

  console.log(`お釣り${changePrice}`);

  if (changePrice > totalSales) {
    console.log('お釣りの金額が自販機内の全金額以上です');
  }

  Object.keys(machine.paidAmount).forEach(price => {
    machine.sales[price] += machine.paidAmount[price];
    machine.paidAmount[price] = 0;
  });

  // @todo お釣りをそもそも現在の在庫で払えるかというチェックが必要
  const calcChange = (changePattern = [500, 100, 50, 10]) => {
    changePattern.some(price => {
      if (changePrice < price) { // 今走査している金額がお釣り以上の金額ならskip
        changePattern.shift();

        calcChange(changePattern);
      }

      if (changePrice === price) { // 今走査している金額とお釣りが一致するなら再帰終了
        machine.sales[price] -= 1
        machine.change[price] += 1
        changePrice -= price;

        return true;
      }

      if (changePrice > price) {　// 今走査している金額よりお釣りの方が高額
        if (!machine.sales[price]) { // 今走査している金額の在庫がない場合はskip
          changePattern.shift();

          calcChange(changePattern);
        }

        machine.sales[price] -= 1;
        machine.change[price] += 1;
        changePrice -= price;
  
        calcChange(changePattern);
      }
    });
  }

  calcChange();
};
