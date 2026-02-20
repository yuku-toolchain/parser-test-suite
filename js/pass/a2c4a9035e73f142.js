if (1 % 1 !== 0) {} else {
  if (1 / (1 % 1) !== Number.POSITIVE_INFINITY) {}
}
if (-1 % -1 !== -0) {} else {
  if (1 / (-1 % -1) !== Number.NEGATIVE_INFINITY) {}
}
if (-1 % 1 !== -0) {} else {
  if (1 / (-1 % 1) !== Number.NEGATIVE_INFINITY) {}
}
if (1 % -1 !== 0) {} else {
  if (1 / (1 % -1) !== Number.POSITIVE_INFINITY) {}
}
if (101 % 51 !== 50) {}
if (101 % -51 !== 50) {}
if (-101 % 51 !== -50) {}
if (-101 % -51 !== -50) {}