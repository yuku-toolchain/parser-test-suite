var x = 0;
var objectRecord = {
  x: 2
};
var probeBefore = function () {
  return x;
};
var probeExpr, probeBody;
with ((eval('var x = 1;'), probeExpr = function () {
  return x;
}, objectRecord)) var x = 3, _ = probeBody = function () {
  return x;
};