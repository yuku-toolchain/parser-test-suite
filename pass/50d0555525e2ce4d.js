let x = 'outside';
var probeExpr, probeSelector, probeStmt;
switch ((probeExpr = function () {
      return x;
    }, null)) {
  case (probeSelector = function () {
      return x;
    }, null):
    probeStmt = function () {
      return x;
    };
    let x = 'inside';
}