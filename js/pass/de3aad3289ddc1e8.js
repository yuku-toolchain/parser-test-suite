let x = 'outside';
var probeDecl, probeExpr, probeBody;
for (let [x, _ = probeDecl = function () {
  return x;
}] of (probeExpr = function () {
  typeof x;
}, [['inside']])) probeBody = function () {
  return x;
};