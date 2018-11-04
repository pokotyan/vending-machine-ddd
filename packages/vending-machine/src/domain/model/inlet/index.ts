import InletModel from './interface';
import ItemModel from '../item/interface';

class Inlet implements InletModel {
  id: number;
  type: string;
  itemName: string;
  isColdable: boolean | null;
  isHottable: boolean | null;
  maxStockNumber: number;
  stock: ItemModel[];

  constructor(model) {
    this.id = model.id || null;
    this.type = model.type || '';
    this.itemName = model.itemName || '';
    this.isColdable = model.isColdable || null;
    this.isHottable = model.isHottable || null;
    this.maxStockNumber = model.maxStockNumber || 0;
    this.stock = model.stock || 0;
  }

  getCurrentStock(): number {
    return this.stock.length;
  }

  isSoldOut(): boolean {
    return this.getCurrentStock() === 0;
  }
}

export default Inlet;
