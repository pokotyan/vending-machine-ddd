import container from './inversify.config'

import { TYPES as TUseCase } from './usecase/type';
import IMachineUseCase from './usecase/machine/interface';

const machineUseCase = container.get<IMachineUseCase>(TUseCase.initFromDB);

const machine = machineUseCase.initFromDB();

console.log(machine);

machineUseCase.setInlet([{
  id: 1,
  type: 'drink',
  itemName: 'soda',
  isColdable: true,
  isHottable: false,
  maxStockNumber: 10,
  stock: []
}, {
  id: 2,
  type: 'drink',
  itemName: '水',
  isColdable: false,
  isHottable: true,
  maxStockNumber: 10,
  stock: []
}]);

console.log(machine);

console.log(machine.inlets[0].isSoldOut());

// マシーンユースケースはthis._machineにマシーンモデルを持つ
// その際、マシーンモデルのinit処理で現在のマシン状態をリポジトリから取ってきてモデル状態に反映させるってことをやる。
// マシーンユースケースの処理はデータの永続化処理とthis._machineに生えているメソッド(モデルの更新)を叩く処理をやる
