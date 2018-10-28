import ItemModel from './interface';

class Item implements ItemModel {
  name: string;
  price: number;
  type: string;
  isColdable: boolean | null;
  isHottable: boolean | null;

  constructor() {
    this.name = '';
    this.price = 0;
    this.type = 'drink';
    this.isColdable = null;
    this.isHottable = null;
  }
}

export default Item;
