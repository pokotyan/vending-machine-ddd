import container from './inversify.config'
import MachineModel from './domain/model/machine';
import { TYPES } from './repository/machine/type';

const machine = container.get<MachineModel>(TYPES.Machine);

export default machine;
