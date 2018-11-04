interface Item {
  name: string,
  price: number,
  type: string,
  isColdable: boolean | null,
  isHottable: boolean | null
};

export default Item;

// name: 名前
// price: 値段
// type: drink | food
// isColdable: 冷たくできるか
// isHottable: 温めれるか