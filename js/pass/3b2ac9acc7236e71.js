if (-0 + -0 !== -0) {} else {
  if (1 / (-0 + -0) !== Number.NEGATIVE_INFINITY) {}
}
if (0 + -0 !== 0) {} else {
  if (1 / (0 + -0) !== Number.POSITIVE_INFINITY) {}
}
if (-0 + 0 !== 0) {} else {
  if (1 / (-0 + 0) !== Number.POSITIVE_INFINITY) {}
}
if (0 + 0 !== 0) {} else {
  if (1 / (0 + 0) !== Number.POSITIVE_INFINITY) {}
}