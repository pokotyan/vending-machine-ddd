import container from './inversify.config'

import { TYPES as TUseCase } from './usecase/machine/type';
import IMachineUseCase from './usecase/machine/interface';

import * as Service from './domain/model/service';


export const machineUseCase = container.get<IMachineUseCase>(TUseCase.machineUseCase);

console.log('初期化処理-----------------');
let machine = machineUseCase.initFromDB();
console.log(machine);


console.log('投入口1にアイテムを補充------------');
machine = machineUseCase.storedItem(machine.inlets[0]);
console.log(machine);


console.log('お金を入れる------------');
machineUseCase.pay({
  100: 1,
  10: 2
});
console.log(machine);


console.log('投入口1のアイテム購入------------');
machineUseCase.buyingItem({ inletId: 1 });

console.log(machine);

// マシーンユースケースはthis._machineにマシーンモデルを持つ
// その際、マシーンモデルのinit処理で現在のマシン状態をリポジトリから取ってきてモデル状態に反映させるってことをやる。
// マシーンユースケースの処理はデータの永続化処理とthis._machineに生えているメソッド(モデルの更新)を叩く処理をやる
