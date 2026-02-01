var r = /./;
var coercibleValue = {
  length: 1,
  0: 'a',
  index: 0,
  groups: {
    foo: {
      toString: function () {
        return 'toString value';
      },
      valueOf: function () {}
    },
    bar: null
  }
};
r.exec = function () {
  return coercibleValue;
};