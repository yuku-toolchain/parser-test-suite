var r = /./g;
var coercibleValueWasReturned = false;
var coercibleValue = {
  length: 1,
  0: {
    toString: function () {
      return '';
    },
    valueOf: function () {}
  },
  index: 0
};
r.exec = function () {
  if (coercibleValueWasReturned) {
    return null;
  }
  coercibleValueWasReturned = true;
  return coercibleValue;
};