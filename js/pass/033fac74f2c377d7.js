var x = 0;
x = -x;
if (x !== -0) {} else {
  if (1 / x !== Number.NEGATIVE_INFINITY) {}
}
var x = -0;
x = -x;
if (x !== 0) {} else {
  if (1 / x !== Number.POSITIVE_INFINITY) {}
}