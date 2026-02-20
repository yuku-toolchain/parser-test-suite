var probeBefore = function () {
  return [x, y, z];
};
var probeTest, probeIncr, probeBody;
var run = true;
for (; run && (eval('var x = 1;'), probeTest = function () {
  return [x, y, z];
}); (eval('var y = 1;'), probeIncr = function () {
  return [x, y, z];
})) var z = 1, _ = probeBody = function () {
  return [x, y, z];
}, run = false;
var x = 2;
var y = 2;
var z = 2;