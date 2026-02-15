let x = 'outside';
var probeDecl, probeBody;
for (let [x, _ = probeDecl = function () {
  return x;
}] of [['inside']]) probeBody = function () {
  return x;
};