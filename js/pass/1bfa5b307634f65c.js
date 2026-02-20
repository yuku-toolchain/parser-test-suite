var r = /./g;
var execWasCalled = false;
var coercibleIndex = {
  valueOf: function () {
    return Math.pow(2, 54);
  }
};
var result = {
  length: 1,
  0: '',
  index: 0
};
r.exec = function () {
  if (execWasCalled) {
    return null;
  }
  r.lastIndex = coercibleIndex;
  execWasCalled = true;
  return result;
};