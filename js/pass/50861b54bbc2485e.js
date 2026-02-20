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
var num = new Number(1);
num.toString = function () {};
num.valueOf = function () {
  return 3;
};
var abrupt = new Number(4);
abrupt.toString = function () {};
abrupt.valueOf = function () {};