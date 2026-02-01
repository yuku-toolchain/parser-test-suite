let x = 'outside';
var probeBefore = function () {
  return x;
};
var probeDecl, probeTest, probeIncr, probeBody;
var run = true;
for (let x = 'inside', _ = probeDecl = function () {
  return x;
}; run && (probeTest = function () {
  return x;
}); probeIncr = function () {
  return x;
}) (probeBody = function () {
  return x;
}, run = false);