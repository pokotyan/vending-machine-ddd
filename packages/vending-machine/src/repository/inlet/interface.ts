import InletModel from '../../domain/model/inlet';

export default interface IInletRepository {
  set(inlets: InletModel[]);
};
