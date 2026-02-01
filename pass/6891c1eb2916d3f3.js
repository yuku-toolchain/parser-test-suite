var probeBefore = function () {
  return x;
};
var probeExpr, probeDecl, probeBody;
var x = 1;
for (let [_, __ = probeDecl = function () {
  return x;
}] of [[probeExpr = function () {
  return x;
}]]) var x = 2, ___ = probeBody = function () {
  return x;
};