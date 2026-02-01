var probeBody;
with ({
  x: 0
}) var x = 1, _ = probeBody = function () {
  return x;
};
var x = 2;