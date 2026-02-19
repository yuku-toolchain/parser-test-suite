var str = new String('str');
str.toString = function () {
  return 'toString';
};
str.valueOf = function () {};
var value = {
  str: 1,
  toString: 2,
  valueOf: 3
};