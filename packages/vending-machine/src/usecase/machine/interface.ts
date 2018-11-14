import MachineModel from '../../domain/model/machine'
import InletModel from '../../domain/model/inlet'
import MoneyModel from '../../domain/model/money'

export default interface IMachineUseCase {
  initFromDB(): MachineModel;
  setInlet(inlets: InletModel[]): MachineModel;
  storedItem({ inletId} : { inletId: number }): MachineModel;
  pay(money: MoneyModel): MachineModel;
  buyingItem({ inletId }: { inletId: number });
  abort(): MachineModel;
};
