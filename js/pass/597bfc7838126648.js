var r = /./;
var coercibleValue = {
  length: 1,
  0: '',
  index: 0,
  groups: {
    foo: {
      toString: function () {}
    }
  }
};
r.exec = function () {
  return coercibleValue;
};