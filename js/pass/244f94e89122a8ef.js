var probeExpr, probeSelector, probeStmt;
var probeBefore = function () {
  return x;
};
switch ((eval('var x = 1;'), probeExpr = function () {
      return x;
    }, null)) {
  case (eval('var x = 2;'), probeSelector = function () {
      return x;
    }, null):
    probeStmt = function () {
      return x;
    };
    var x = 3;
}