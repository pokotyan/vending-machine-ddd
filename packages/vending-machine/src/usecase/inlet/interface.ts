import InletModel from '../../domain/model/inlet'

export default interface IUseCaseStoreItem {
  init(inlets: InletModel[], numberOfInlet: number): InletModel[];
};
