import MachineModel from './index';
import InletModel from '../inlet';

interface setInletsParams {
  machineModel: MachineModel;
  inlets: InletModel[];
}

export const setInlets = ({ machineModel, inlets }: setInletsParams): void => {
  machineModel.inlets = inlets.map(inlet => new InletModel(inlet));
}
