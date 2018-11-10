class Item {
  inletId?: number;
  name: string;
  type: string;
  temperatureType: string;

  constructor(model) {
    this.inletId = model.inletId || null;
    this.name = model.name || '';
    this.type = model.type || 'drink';
    this.temperatureType = model.temperatureType || 'cold';
  }
}

export default Item;

// name: 名前
// type: drink | food
// temperatureType: hot | cold
