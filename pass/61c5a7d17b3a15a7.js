if (1 % Number.NEGATIVE_INFINITY !== 1) {}
if (1 % Number.POSITIVE_INFINITY !== 1) {}
if (-1 % Number.POSITIVE_INFINITY !== -1) {}
if (-1 % Number.NEGATIVE_INFINITY !== -1) {}
if (0 % Number.POSITIVE_INFINITY !== 0) {} else {
  if (1 / (0 % Number.POSITIVE_INFINITY) !== Number.POSITIVE_INFINITY) {}
}
if (0 % Number.NEGATIVE_INFINITY !== 0) {} else {
  if (1 / (0 % Number.NEGATIVE_INFINITY) !== Number.POSITIVE_INFINITY) {}
}
if (-0 % Number.POSITIVE_INFINITY !== -0) {} else {
  if (1 / (-0 % Number.POSITIVE_INFINITY) !== Number.NEGATIVE_INFINITY) {}
}
if (-0 % Number.NEGATIVE_INFINITY !== -0) {} else {
  if (1 / (-0 % Number.NEGATIVE_INFINITY) !== Number.NEGATIVE_INFINITY) {}
}
if (Number.MAX_VALUE % Number.NEGATIVE_INFINITY !== Number.MAX_VALUE) {}
if (Number.MAX_VALUE % Number.POSITIVE_INFINITY !== Number.MAX_VALUE) {}
if (-Number.MAX_VALUE % Number.POSITIVE_INFINITY !== -Number.MAX_VALUE) {}
if (-Number.MAX_VALUE % Number.NEGATIVE_INFINITY !== -Number.MAX_VALUE) {}
if (Number.MIN_VALUE % Number.NEGATIVE_INFINITY !== Number.MIN_VALUE) {}
if (Number.MIN_VALUE % Number.POSITIVE_INFINITY !== Number.MIN_VALUE) {}
if (-Number.MIN_VALUE % Number.POSITIVE_INFINITY !== -Number.MIN_VALUE) {}
if (-Number.MIN_VALUE % Number.NEGATIVE_INFINITY !== -Number.MIN_VALUE) {}