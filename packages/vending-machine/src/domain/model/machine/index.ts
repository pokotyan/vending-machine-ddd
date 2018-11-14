import InletModel from '../../../domain/model/inlet';
import MoneyModel from '../../../domain/model/money';

class Machine {
  inlets: InletModel[];
  sales: MoneyModel;
  paidAmount: MoneyModel;
  change: MoneyModel;

  constructor() {
    this.inlets = [];
    this.sales = new MoneyModel();
    this.paidAmount = new MoneyModel();
    this.change = new MoneyModel();
  }
}

export default Machine;

// inlets: 投入口モデル
// setInlets: 投入口の設定関数
// sales: 売り上げ
// paidAmount: 投入金額
// change: お釣り