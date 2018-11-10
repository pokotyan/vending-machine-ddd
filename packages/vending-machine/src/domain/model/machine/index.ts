import InletModel from '../../../domain/model/inlet';

class Machine {
  inlets: InletModel[];
  numberOfInlet: number;

  constructor() {
    this.inlets = [];
    this.numberOfInlet = 2;
  }
}

export default Machine;

// numberOfInlet: 投入口の数
// inlets: 投入口モデル
// setInlets: 投入口の設定関数
