import { injectable, inject } from 'inversify';
import IUseCaseInlet from './interface';
import { lazyInject } from '../../inversify.decorator'

import IInputInlet from '../@input/inlet/interface'
import { TYPES as TInputInlet } from '../@input/inlet/type';

import InletModel from '../../domain/model/inlet';

@injectable()
export default class Inlet implements IUseCaseInlet {
  @lazyInject(TInputInlet.setInlet) public _input: IInputInlet;

  init(inlets, numberOfInlet): InletModel[] {
    return this._input.setInlet(inlets, numberOfInlet);
  }
}

