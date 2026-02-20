var r = /./g;
var poisonedZero = {
  get 0() {}
};
r.exec = function () {
  return poisonedZero;
};