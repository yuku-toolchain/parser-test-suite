if (0 % 1 !== 0) {} else {
  if (1 / (0 % 1) !== Number.POSITIVE_INFINITY) {}
}
if (0 % -1 !== 0) {} else {
  if (1 / (0 % -1) !== Number.POSITIVE_INFINITY) {}
}
if (-0 % 1 !== -0) {} else {
  if (1 / (-0 % 1) !== Number.NEGATIVE_INFINITY) {}
}
if (-0 % -1 !== -0) {} else {
  if (1 / (-0 % -1) !== Number.NEGATIVE_INFINITY) {}
}
if (0 % Number.MAX_VALUE !== 0) {} else {
  if (1 / (0 % Number.MAX_VALUE) !== Number.POSITIVE_INFINITY) {}
}
if (0 % Number.MIN_VALUE !== 0) {} else {
  if (1 / (0 % Number.MIN_VALUE) !== Number.POSITIVE_INFINITY) {}
}
if (-0 % Number.MAX_VALUE !== -0) {} else {
  if (1 / (-0 % Number.MAX_VALUE) !== Number.NEGATIVE_INFINITY) {}
}
if (-0 % Number.MIN_VALUE !== -0) {} else {
  if (1 / (-0 % Number.MIN_VALUE) !== Number.NEGATIVE_INFINITY) {}
}