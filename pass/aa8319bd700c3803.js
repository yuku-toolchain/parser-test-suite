var probeBefore = function () {
  return x;
};
let x = 'outside';
var probeExpr, probeDecl, probeBody;
for (let [x, _, __ = probeDecl = function () {
  return x;
}] of [['inside', probeExpr = function () {
  typeof x;
}]]) probeBody = function () {
  return x;
};