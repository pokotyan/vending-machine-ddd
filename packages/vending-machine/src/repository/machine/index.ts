import { injectable } from 'inversify';
import IMachineRepository from './interface'

@injectable()
class Machine implements IMachineRepository {
}

export default Machine;
