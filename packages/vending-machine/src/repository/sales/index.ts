import { injectable } from 'inversify';
import ISalesRepository from './interface';

@injectable()
class Sales implements ISalesRepository {
  getCurrentStatus() {
    // @todo dbから取ってくる
    return {
      10: 10,
      50: 10,
      100: 1,
      500: 0,
      1000: 0,
    } 
  }
}

export default Sales;
