import MachineModel from '../../domain/model/machine'
import InletModel from '../../domain/model/inlet'

export default interface IMachineUseCase {
  initFromDB(): MachineModel;
  setInlet(inlets: InletModel[]): MachineModel;
};
