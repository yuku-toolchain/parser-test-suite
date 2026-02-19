var r = /./;
var coercibleValue = {
  length: 4,
  index: 0,
  3: {
    toString: function () {
      return 'toString value';
    },
    valueOf: function () {}
  }
};
r.exec = function () {
  return coercibleValue;
};