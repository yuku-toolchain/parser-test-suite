const options = {
  localeMatcher: {
    toString() {}
  }
};
options.localeMatcher = {
  toString: undefined,
  valueOf() {}
};
options.localeMatcher = {
  [Symbol.toPrimitive]() {}
};
options.localeMatcher = Symbol();