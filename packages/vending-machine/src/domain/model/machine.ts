import ItemModel from './item/interface';
import InletModel from './inlet/interface';

interface Machine {
  stock: ItemModel[];
  numberOfInlet: number,
  inlets: InletModel[];
  setInlets(inlets: InletModel[]);
  storedItem(items: ItemModel[]);
}

export default Machine