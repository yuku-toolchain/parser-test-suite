var num = new Number(10);
num.toString = function () {
  return 'toString';
};
num.valueOf = function () {};
var value = {
  10: 1,
  toString: 2,
  valueOf: 3
};