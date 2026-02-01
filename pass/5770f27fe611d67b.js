var x = 1;
var probeBefore = function () {
  return x;
};
var probeInside;
try {
  throw null;
} catch (_) {
  var x = 2;
  probeInside = function () {
    return x;
  };
}