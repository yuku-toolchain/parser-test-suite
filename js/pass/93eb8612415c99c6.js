var probeBefore = function () {
  return x;
};
let x = 'outside';
var probeExpr, probeDecl, probeBody;
for (let [x, _ = probeDecl = function () {
  return x;
}] in {
  i: probeExpr = function () {
    typeof x;
  }
}) probeBody = function () {
  return x;
};