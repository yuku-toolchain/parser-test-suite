var r = /./;
var coercibleValue = {
  length: 0,
  index: 0,
  groups: {
    get foo() {}
  }
};
r.exec = function () {
  return coercibleValue;
};