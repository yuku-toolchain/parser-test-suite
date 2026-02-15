if (Number.MIN_VALUE * 0.1 !== 0) {}
if (-0.1 * Number.MIN_VALUE !== -0) {} else {
  if (1 / (-0.1 * Number.MIN_VALUE) !== Number.NEGATIVE_INFINITY) {}
}
if (Number.MIN_VALUE * 0.5 !== 0) {}
if (-0.5 * Number.MIN_VALUE !== -0) {} else {
  if (1 / (-0.5 * Number.MIN_VALUE) !== Number.NEGATIVE_INFINITY) {}
}
if (Number.MIN_VALUE * 0.51 !== Number.MIN_VALUE) {}
if (-0.51 * Number.MIN_VALUE !== -Number.MIN_VALUE) {}
if (Number.MIN_VALUE * 0.9 !== Number.MIN_VALUE) {}
if (-0.9 * Number.MIN_VALUE !== -Number.MIN_VALUE) {}