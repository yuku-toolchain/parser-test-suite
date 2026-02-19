var r = /./;
var coercibleValue = {
  length: 1,
  0: '',
  index: 0,
  groups: null
};
r.exec = function () {
  return coercibleValue;
};