class Item {
  inletId?: number;
  name: string;
  price: number;
  type: string;
  temperatureType: string;

  constructor(model) {
    this.inletId = model.inletId || null;
    this.name = model.name || '';
    this.price = model.price || 0;
    this.type = model.type || 'drink';
    this.temperatureType = model.temperatureType || 'cold';
  }
}

export default Item;

// name: 名前
// price: 値段
// type: drink | food
// temperatureType: hot | cold
