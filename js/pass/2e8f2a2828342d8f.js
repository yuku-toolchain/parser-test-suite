var s1 = Symbol();
var s2 = Symbol();
var s3 = Symbol();
var err = function () {};
var obj1 = {
  [Symbol.toPrimitive]: function () {
    return s1;
  },
  toString: err,
  valueOf: err
};
var obj2 = {
  toString: function () {
    return s2;
  },
  valueOf: err
};
var obj3 = {
  toString: undefined,
  valueOf: function () {
    return s3;
  }
};
var C = class {
  [obj1] = 42;
  [obj2] = 43;
  [obj3] = 44;
};
var c = new C();