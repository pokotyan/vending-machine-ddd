import { injectable } from 'inversify';
import IInletRepository from './interface'

@injectable()
class InletRepository implements IInletRepository {
  set(inlets) {
    // 引数で渡ってきたinletsを永続保存する処理
  }
}

export default InletRepository;

