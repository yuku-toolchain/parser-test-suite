var r = /./;
var coercibleIndex = {
  length: {
    valueOf: function () {
      return 3.9;
    }
  },
  0: '',
  1: 'foo',
  2: 'bar',
  3: 'baz',
  index: 0
};
r.exec = function () {
  return coercibleIndex;
};