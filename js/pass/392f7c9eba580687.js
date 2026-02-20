if ((-1 && -0) !== 0) {} else {
  if (1 / (-1 && -0) !== Number.NEGATIVE_INFINITY) {}
}
if ((-1 && 0) !== 0) {} else {
  if (1 / (-1 && 0) !== Number.POSITIVE_INFINITY) {}
}
if (isNaN(0.1 && NaN) !== true) {}
var y = new Number(0);
if ((new Number(-1) && y) !== y) {}
var y = new Number(NaN);
if ((new Number(0) && y) !== y) {}
var y = new Number(-1);
if ((new Number(NaN) && y) !== y) {}