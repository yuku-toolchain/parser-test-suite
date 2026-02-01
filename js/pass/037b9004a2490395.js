var r = /./;
var coercibleValue = {
  length: 0,
  index: 0,
  get groups() {}
};
r.exec = function () {
  return coercibleValue;
};