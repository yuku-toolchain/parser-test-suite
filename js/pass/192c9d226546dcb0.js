var probeBefore = function () {
  return x;
};
var probeExpr, probeDecl, probeBody;
var x = 1;
for (let [_ = probeDecl = function () {
  return x;
}] in {
  '': probeExpr = function () {
    return x;
  }
}) var x = 2, __ = probeBody = function () {
  return x;
};