import ItemModel from '../item';

class Inlet {
  id: number;
  type: string;
  itemName: string;
  price: number;
  temperatureType: string;
  maxStockNumber: number;
  stock: ItemModel[];

  // constructor(model) {
  //   this.id = model.id || null;
  //   this.type = model.type || '';
  //   this.itemName = model.itemName || '';
  //   this.price = model.price || 0;
  //   this.temperatureType = model.temperatureType || 'cold';
  //   this.maxStockNumber = model.maxStockNumber || 0;
  //   this.stock = model.stock || 0;
  // }
}

export default Inlet;

// 投入口はidを持つ（投入口とドリンクはこのidでひもづく）
// 投入口はドリンク用,食べ物用のどちらのタイプの投入口かという情報をもつ
// 投入口はどのドリンク用の投入口かという情報をもつ
// 投入口はドリンクの値段を持つ
// 投入口は冷たい用、暖かい用の二種類の投入口がある。
// 投入口はいくつドリンクを投入できるかのnumberをもつ
// 投入口は今いくつドリンクが投入されているかのnumberをもつ
// 投入口は売り切れフラグをもつ。今投入されているドリンクが0ならフラグがたつ。
// 投入口はストックの配列(アイテムモデルの配列)を持つ
// 投入口は購入可能ランプを持つ