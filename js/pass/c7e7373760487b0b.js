var case1 = {
  [Symbol.toPrimitive]() {},
  toString() {
    throw 'toString called';
  },
  valueOf() {
    throw 'valueOf called';
  }
};
var case2 = {
  [Symbol.toPrimitive]: undefined,
  toString() {},
  valueOf() {
    throw 'valueOf called';
  }
};
var case3 = {
  [Symbol.toPrimitive]: undefined,
  toString: undefined,
  valueOf() {}
};