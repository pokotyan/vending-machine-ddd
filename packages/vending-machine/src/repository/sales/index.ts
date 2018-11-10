import { injectable } from 'inversify';
import ISalesRepository from './interface';

@injectable()
class Sales implements ISalesRepository {
  getCurrentStatus() {
    // @todo dbから取ってくる
    return {
      // 1: 0,
      // 5: 0,
      // 10: 0,
      50: 10,
      100: 10,
      500: 3,
      // 1000: 0,
    } 
  }
}

export default Sales;
