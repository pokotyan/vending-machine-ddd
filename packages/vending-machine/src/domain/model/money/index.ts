class Money {
  10?: number;
  50?: number;
  100?: number;
  500?: number;
  1000?: number;

  constructor() {
    this[10] = 0;
    this[50] = 0;
    this[100] = 0;
    this[500] = 0;
    this[1000] = 0;
  }
}

export default Money;
