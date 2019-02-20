import { Type } from "class-transformer";
import InletModel from '../../../domain/model/inlet';
import MoneyModel from '../../../domain/model/money';

const MONEY_TYPE = ['10', '50', '100', '500', '1000'];

class Machine {
  @Type(() => InletModel)
  inlets: InletModel[];

  @Type(() => MoneyModel)
  sales: MoneyModel;

  @Type(() => MoneyModel)
  paidAmount: MoneyModel;

  @Type(() => MoneyModel)
  change: MoneyModel;

  setInlets({ inlets }: {
    inlets: InletModel[];
  }) {
    this.inlets = inlets;
  }
  
  setPaidAmount({ paidAmount }: {
    paidAmount?: MoneyModel;
  }) {
    if (!paidAmount) {
      return this.paidAmount = { 10: 0, 50: 0, 100: 0, 500: 0, 1000: 0 };
    }

    MONEY_TYPE.forEach(price => {
      if (!Object.keys(paidAmount).includes(price)) {
        paidAmount[price] = 0;
      };
    })
  
    this.paidAmount = paidAmount;
  }

  setSales({ sales }: { sales: MoneyModel }) {
    this.sales = sales;
  }

  setChange() {
    this.change = { 10: 0, 50: 0, 100: 0, 500: 0, 1000: 0 };
  }
}

export default Machine;

// inlets: 投入口モデル
// setInlets: 投入口の設定関数
// sales: 売り上げ
// paidAmount: 投入金額
// change: お釣り