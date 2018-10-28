import InletModel from '../../../domain/model/inlet';

export default interface IInputStoreItem {
  setInlet(inlets: InletModel[], numberOfInlet: number): InletModel[];
};
