var probeExpr, probeStmt;
var probeBefore = function () {
  return x;
};
switch ((eval('var x = 1;'), probeExpr = function () {
      return x;
    })) {
  default:
    probeStmt = function () {
      return x;
    };
    var x = 2;
}