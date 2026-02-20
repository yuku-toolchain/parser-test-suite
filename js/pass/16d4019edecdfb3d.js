var case1 = Symbol();
var case2 = {
  [Symbol.toPrimitive]() {
    return Symbol();
  },
  toString() {},
  valueOf() {}
};