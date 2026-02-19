var obj = {
  a1: {
    b1: [1, 2, 3, 4],
    b2: {
      c1: 1,
      c2: 2
    }
  },
  a2: 'a2'
};
var str = new String('xxx');
str.toString = function () {
  return '---';
};
str.valueOf = function () {};
var abrupt = new String('xxx');
abrupt.toString = function () {};
abrupt.valueOf = function () {};