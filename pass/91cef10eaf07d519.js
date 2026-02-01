var r = /./;
var coercibleIndex = {
  length: 1,
  0: '',
  index: {
    valueOf: function () {
      return 2.9;
    }
  }
};
r.exec = function () {
  return coercibleIndex;
};
var replacer = function (_matched, position) {
  return position;
};