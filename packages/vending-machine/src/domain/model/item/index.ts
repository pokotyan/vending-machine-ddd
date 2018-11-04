import ItemModel from './interface';

class Item implements ItemModel {
  inletId?: number;
  name: string;
  price: number;
  type: string;
  isColdable: boolean | null;
  isHottable: boolean | null;

  constructor(model) {
    this.inletId = model.inletId || null;
    this.name = model.name || '';
    this.price = model.price || 0;
    this.type = model.type || 'drink';
    this.isColdable = model.isColdable || null;
    this.isHottable = model.isHottable || null;
  }
}

export default Item;
