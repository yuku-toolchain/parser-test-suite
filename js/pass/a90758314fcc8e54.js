var r = /./;
var poisonedValue = {
  length: 2,
  get 1() {}
};
r.exec = function () {
  return poisonedValue;
};