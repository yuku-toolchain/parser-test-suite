if ((-0 && -1) !== 0) {} else {
  if (1 / (-0 && -1) !== Number.NEGATIVE_INFINITY) {}
}
if ((0 && new Number(-1)) !== 0) {} else {
  if (1 / (0 && new Number(-1)) !== Number.POSITIVE_INFINITY) {}
}
if (isNaN(NaN && 1) !== true) {}