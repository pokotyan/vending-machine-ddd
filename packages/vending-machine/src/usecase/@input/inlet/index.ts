import { injectable } from 'inversify';
import IInputInlet from './interface';
import InletModel from '../../../domain/model/inlet';

@injectable()
class Inlet implements IInputInlet {
  setInlet(inlets: InletModel[], numberOfInlet: number) {
    if (inlets.length > numberOfInlet) {
      throw '投入口上限エラー';
    }

    // @todo 投入口に入れるドリンクとcoldable、hottableが矛盾していたらエラー

    return inlets;
  }
}

export default Inlet
