var options = {
  style: {
    toString() {}
  }
};
options.style = {
  toString: undefined,
  valueOf() {}
};
options.style = {
  [Symbol.toPrimitive]() {}
};
options.style = Symbol();