import IMachineModel from '../../domain/model/machine/interface'
import IInletModel from '../../domain/model/inlet/interface'

export default interface IMachineUseCase {
  initFromDB(): IMachineModel;
  setInlet(inlets: IInletModel[]): IMachineModel;
};
