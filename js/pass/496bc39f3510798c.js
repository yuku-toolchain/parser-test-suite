if (isNaN(+Number.NaN) !== true) {}
if (+ +0 !== +0) {} else {
  if (1 / + +0 !== Number.POSITIVE_INFINITY) {}
}
if (+-0 !== -0) {} else {
  if (1 / +-0 !== Number.NEGATIVE_INFINITY) {}
}
if (+Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY) {}
if (+Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY) {}
if (+Number.MAX_VALUE !== Number.MAX_VALUE) {}
if (+Number.MIN_VALUE !== Number.MIN_VALUE) {}