var locales = {
  length: {
    valueOf() {}
  }
};
locales.length = {
  [Symbol.toPrimitive]() {}
};
locales.length = {
  toString() {}
};
locales.length = Symbol();
locales.length = BigInt(1);