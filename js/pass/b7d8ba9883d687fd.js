if ((0 || -0) !== 0) {} else {
  if (1 / (0 || -0) !== Number.NEGATIVE_INFINITY) {}
}
if ((-0 || 0) !== 0) {} else {
  if (1 / (-0 || 0) !== Number.POSITIVE_INFINITY) {}
}
var y = new Number(-1);
if ((0 || y) !== y) {}
var y = new Number(0);
if ((NaN || y) !== y) {}