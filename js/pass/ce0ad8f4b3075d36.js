function fn(e) {
  return e;
}
var arr = {
  length: Symbol()
};
arr = {
  get length() {}
};
arr = {
  length: {
    valueOf() {}
  }
};
arr = {
  length: {
    toString() {}
  }
};
arr = {
  length: {
    [Symbol.toPrimitive]() {}
  }
};