import InletModel from './interface';

class Inlet implements InletModel {
  type: string;
  itemName: string;
  isColdable: boolean | null;
  isHottable: boolean | null;
  maxStockNumber: number;
  currentStockNumber: number;

  constructor(model) {
    this.type = model.type || '';
    this.itemName = model.itemName || '';
    this.isColdable = model.isColdable || null;
    this.isHottable = model.isHottable || null;
    this.maxStockNumber = model.maxStockNumber || 0;
    this.currentStockNumber = model.currentStockNumber || 0;
  }

  isSoldOut(): boolean {
    return this.currentStockNumber === 0;
  }
}

export default Inlet;
