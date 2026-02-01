var r = /./;
var coercibleValue = {
  length: 1,
  0: {
    toString: function () {
      return 'toString value';
    },
    valueOf: function () {}
  },
  index: 0
};
r.exec = function () {
  return coercibleValue;
};