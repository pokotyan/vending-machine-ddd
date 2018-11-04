import IInletModel from '../../domain/model/inlet/interface';

export default interface IMachineRepository {
  getCurrentStatus(): { inlets: IInletModel[] };
};
