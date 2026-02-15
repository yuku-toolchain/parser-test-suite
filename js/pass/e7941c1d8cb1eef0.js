let x = 'outside';
var probeDecl, probeExpr, probeBody;
for (let [x, _ = probeDecl = function () {
  return x;
}] in {
  i: probeExpr = function () {
    typeof x;
  }
}) probeBody = function () {
  return x;
};