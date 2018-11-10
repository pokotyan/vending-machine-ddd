import InletModel from '../../domain/model/inlet';

export default interface IMachineRepository {
  getCurrentStatus(): { inlets: InletModel[] };
};
