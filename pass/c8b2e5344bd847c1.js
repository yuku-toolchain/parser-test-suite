var callCount = 0;
var obj = {
  length: Math.pow(2, 32)
};
var cb = function () {
  callCount += 1;
};