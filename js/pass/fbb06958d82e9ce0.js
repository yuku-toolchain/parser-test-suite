var toString = BigInt.prototype.toString;
var obj = {
  valueOf: function () {},
  toString: function () {},
  [Symbol.toPrimitive]: function () {}
};