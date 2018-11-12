import MachineModel from '../machine';

// @todo お釣りをそもそも現在の在庫で払えるかというチェックが必要
export const calcChange = ({ changePattern = [500, 100, 50, 10], changePrice, machine }: {
  changePattern?: number[],
  changePrice: number,
  machine: MachineModel
}) => {
  changePattern.some(price => {
    if (changePrice < price) { // 今走査している金額がお釣り以上の金額ならskip
      changePattern.shift();

      calcChange({ changePattern, changePrice, machine });
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

        calcChange({ changePattern, changePrice, machine });
      }

      machine.sales[price] -= 1;
      machine.change[price] += 1;
      changePrice -= price;

      calcChange({ changePattern, changePrice, machine });
    }
  });
}
