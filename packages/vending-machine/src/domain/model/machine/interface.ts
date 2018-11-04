import InletModel from '../inlet/interface';

interface Machine {
  numberOfInlet: number,
  inlets: InletModel[];
  setInlets(inlets: InletModel[]);
}

export default Machine;

// numberOfInlet: 投入口の数
// inlets: 投入口モデル
// setInlets: 投入口の設定関数
