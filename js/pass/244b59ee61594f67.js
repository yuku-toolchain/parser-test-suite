var r = /./;
var poisonedValue = {
  get 0() {}
};
r.exec = function () {
  return poisonedValue;
};