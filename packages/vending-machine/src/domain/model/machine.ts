import ItemModel from './item'

interface Machine {
  stock: ItemModel[];
  storedItem(items: ItemModel[]);
}

export default Machine