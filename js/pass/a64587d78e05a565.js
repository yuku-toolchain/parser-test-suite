var options = {
  type: {
    toString() {}
  }
};
options.type = {
  toString: undefined,
  valueOf() {}
};
options.type = {
  [Symbol.toPrimitive]() {}
};
options.type = Symbol();