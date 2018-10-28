import InletModel from '../../domain/model/inlet/interface'

export default interface IUseCaseStoreItem {
  init(inlets: InletModel[], numberOfInlet: number): InletModel[];
};
