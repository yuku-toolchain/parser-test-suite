var err = function () {};
var obj1 = {
  [Symbol.toPrimitive]: function () {
    return "d";
  },
  toString: err,
  valueOf: err
};
var obj2 = {
  toString: function () {
    return "e";
  },
  valueOf: err
};
var obj3 = {
  toString: undefined,
  valueOf: function () {
    return "f";
  }
};
var C = class {
  [obj1] = 42;
  [obj2] = 43;
  [obj3] = 44;
};
var c = new C();