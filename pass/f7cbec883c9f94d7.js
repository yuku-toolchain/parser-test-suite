let x = 'outside';
var probeFirst, probeSecond;
for (let x of ['first', 'second']) if (!probeFirst) probeFirst = function () {
  return x;
}; else probeSecond = function () {
  return x;
};