var probeBefore, probeTest, probeIncr, probeBody;
var run = true;
for (let x = 'outside', _ = probeBefore = function () {
  return x;
}; run && (x = 'inside', probeTest = function () {
  return x;
}); probeIncr = function () {
  return x;
}) (probeBody = function () {
  return x;
}, run = false);