var r = /./;
var coercibleValue = {
  length: 1,
  0: 'b',
  index: 1,
  groups: '123'
};
r.exec = function () {
  return coercibleValue;
};