import InletModel from './interface';

class Inlet implements InletModel {
  type: string;
  itemName: string;
  isColdable: boolean | null;
  isHottable: boolean | null;
  maxStockNumber: number;
  currentStockNumber: number;

  constructor() {
    this.type = '';
    this.itemName = '';
    this.isColdable = null;
    this.isHottable = null;
    this.maxStockNumber = 0;
    this.currentStockNumber = 0;
  }

  isSoldOut(): boolean {
    return this.currentStockNumber === 0;
  }
}

export default Inlet;
