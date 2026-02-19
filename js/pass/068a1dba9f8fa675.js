var probeBefore = function () {
  return x;
};
var probeTest, probeIncr, probeBody;
var run = true;
for (var _ = eval('var x = 1;'); run && (probeTest = function () {
  return x;
}); probeIncr = function () {
  return x;
}) (probeBody = function () {
  return x;
}, run = false);
var x = 2;