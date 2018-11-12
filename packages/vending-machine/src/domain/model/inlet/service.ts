import InletModel from './index';
import ItemModel from '../item';
import MachineModel from '../machine';
import * as Service from '../service';

export const getCurrentStock = (inletModel: InletModel): number => {
  return inletModel.stock.length;
};

export const isSoldOut = (inletModel: InletModel): boolean => {
  return inletModel.stock.length === 0;
};

export const isFullStock = (inletModel: InletModel): boolean => {
  return inletModel.stock.length >= inletModel.maxStockNumber;
};

// 投入口に入れれるアイテムの判定は以下。
// 投入口がいっぱいじゃない && アイテムの名前と投入口の名前が一致 && 冷たい、暖かいの判定が一致
export const setStock = (inletModel: InletModel, item: ItemModel): Promise<InletModel> => {
  if (isFullStock(inletModel)) {
    console.log(`${inletModel.id}の挿入口はもうドリンクが満タンです`)

    return Promise.reject(inletModel);
  }

  if (item.temperatureType !== inletModel.temperatureType) {
    console.log(`${item.name}は${item.temperatureType}専用の飲み物なので${inletModel.temperatureType}用の挿入口には入れれません`);

    return Promise.reject(inletModel);
  }

  if (item.name === inletModel.itemName) {
    inletModel.stock.push(item);
  }

  return Promise.resolve(inletModel);
};

export const releaseStock = ({ machine, inletId }: {
  machine: MachineModel;
  inletId: number;
}) => {
  const inlet = machine.inlets.find(inlet => inlet.id === inletId);

  inlet.stock.pop();
};

// 引数のinletに在庫があって、かつ現在の投入金額がアイテムの金額を上回るならアイテムは購入可能
export const isPurchaseAvailable = ({ machine, inletId }: {
  machine: MachineModel;
  inletId: number;
}): boolean => {
  const inlet = machine.inlets.find(inlet => inlet.id === inletId);
  const paidAmount = Service.Money.calcTotalPrice(machine, 'paidAmount');

  return !isSoldOut(inlet) && paidAmount >= inlet.price;
};