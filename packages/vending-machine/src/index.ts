import container from './inversify.config'

import { TYPES as TUseCase } from './usecase/machine/type';
import IMachineUseCase from './usecase/machine/interface';

import * as inletService from './domain/model/inlet/service';


const machineUseCase = container.get<IMachineUseCase>(TUseCase.machineUseCase);

let machine = machineUseCase.initFromDB();

console.log(machine);

machineUseCase.setInlet([{
  id: 1,
  type: 'drink',
  itemName: 'ソーダ',
  temperatureType: 'cold',
  maxStockNumber: 10,
  stock: []
}, {
  id: 2,
  type: 'drink',
  itemName: 'ココア',
  temperatureType: 'hot',
  maxStockNumber: 10,
  stock: []
}]);

console.log(inletService.isSoldOut(machine.inlets[0]));

machine = machineUseCase.storedItem(machine.inlets[0]);

console.log(machine.inlets[0])

// マシーンユースケースはthis._machineにマシーンモデルを持つ
// その際、マシーンモデルのinit処理で現在のマシン状態をリポジトリから取ってきてモデル状態に反映させるってことをやる。
// マシーンユースケースの処理はデータの永続化処理とthis._machineに生えているメソッド(モデルの更新)を叩く処理をやる
