import { injectable } from 'inversify';

@injectable()
class InletRepository {
  set(inlets) {
    // 引数で渡ってきたinletsを永続保存する処理
  }
}

export default InletRepository;

