if (1 / Number.NEGATIVE_INFINITY !== -0) {} else {
  if (1 / (1 / Number.NEGATIVE_INFINITY) !== Number.NEGATIVE_INFINITY) {}
}
if (-1 / Number.NEGATIVE_INFINITY !== +0) {} else {
  if (1 / (-1 / Number.NEGATIVE_INFINITY) !== Number.POSITIVE_INFINITY) {}
}
if (1 / Number.POSITIVE_INFINITY !== +0) {} else {
  if (1 / (1 / Number.POSITIVE_INFINITY) !== Number.POSITIVE_INFINITY) {}
}
if (-1 / Number.POSITIVE_INFINITY !== -0) {} else {
  if (1 / (-1 / Number.POSITIVE_INFINITY) !== Number.NEGATIVE_INFINITY) {}
}