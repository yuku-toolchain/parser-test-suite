let x = 'outside';
var probeExpr, probeStmt;
switch (probeExpr = function () {
      return x;
    }) {
  default:
    probeStmt = function () {
      return x;
    };
    let x = 'inside';
}