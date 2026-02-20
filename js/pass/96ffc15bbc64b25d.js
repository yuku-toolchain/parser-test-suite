if (Number.MIN_VALUE / 2.1 !== 0) {}
if (Number.MIN_VALUE / -2.1 !== -0) {} else {
  if (1 / (Number.MIN_VALUE / -2.1) !== Number.NEGATIVE_INFINITY) {}
}
if (Number.MIN_VALUE / 2.0 !== 0) {}
if (Number.MIN_VALUE / -2.0 !== -0) {} else {
  if (1 / (Number.MIN_VALUE / -2.0) !== Number.NEGATIVE_INFINITY) {}
}
if (Number.MIN_VALUE / 1.9 !== Number.MIN_VALUE) {}
if (Number.MIN_VALUE / -1.9 !== -Number.MIN_VALUE) {}
if (Number.MIN_VALUE / 1.1 !== Number.MIN_VALUE) {}
if (Number.MIN_VALUE / -1.1 !== -Number.MIN_VALUE) {}