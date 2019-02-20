import 'reflect-metadata';
import container from './inversify.config'

import { TYPES as TUseCase } from './usecase/machine/type';
import IMachineUseCase from './usecase/machine/interface';

import * as Service from './domain/model/service';


export const machineUseCase = container.get<IMachineUseCase>(TUseCase.machineUseCase);

console.log('@todo classTransformerを入れてservice層が必要なくなった。domainのところにメソッドを写していく。(machineモデルは済)')

console.log('初期化処理-----------------');
const machine = machineUseCase.initFromDB();
console.log(machine);


console.log('投入口1にアイテムを補充------------');
machineUseCase.storedItem({ inletId: 1 });
console.log(machine.inlets[0]);


console.log('お金を入れる------------');
machineUseCase.pay({
  100: 1,
  10: 10
});
console.log(machine);

let sales = Service.Money.calcTotalPrice(machine, 'sales');
console.log(`売り上げ${sales}`);


console.log('中止------------');
machineUseCase.abort();
console.log(machine);



console.log('投入口1のアイテム購入------------');
machineUseCase.buyingItem({ inletId: 1 });

console.log(machine);

sales = Service.Money.calcTotalPrice(machine, 'sales');

console.log(`売り上げ${sales}`);

// マシーンユースケースはthis._machineにマシーンモデルを持つ
// その際、マシーンモデルのinit処理で現在のマシン状態をリポジトリから取ってきてモデル状態に反映させるってことをやる。
// マシーンユースケースの処理はデータの永続化処理とthis._machineに生えているメソッド(モデルの更新)を叩く処理をやる
