var obj = {
  toString() {},
  valueOf() {},
  [Symbol.toPrimitive]() {
    return function () {};
  }
};