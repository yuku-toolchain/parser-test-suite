const options = {
  granularity: {
    toString() {}
  }
};
options.granularity = {
  toString: undefined,
  valueOf() {}
};
options.granularity = {
  [Symbol.toPrimitive]() {}
};
options.granularity = Symbol();