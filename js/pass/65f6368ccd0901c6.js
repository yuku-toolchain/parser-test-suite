var probeBefore = function () {
  return x;
};
var x = 1;
var probeDecl, probeExpr, probeBody;
for (let [_ = probeDecl = function () {
  return x;
}] in {
  '': (eval('var x = 2;'), probeExpr = function () {
    return x;
  })
}) probeBody = function () {
  return x;
};