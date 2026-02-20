if (Number.MIN_VALUE - Number.MIN_VALUE !== +0) {} else {
  if (1 / (Number.MIN_VALUE - Number.MIN_VALUE) !== Number.POSITIVE_INFINITY) {}
}
if (-Number.MAX_VALUE - -Number.MAX_VALUE !== +0) {} else {
  if (1 / (-Number.MAX_VALUE - -Number.MAX_VALUE) !== Number.POSITIVE_INFINITY) {}
}
if (1 / Number.MAX_VALUE - 1 / Number.MAX_VALUE !== +0) {} else {
  if (1 / (1 / Number.MAX_VALUE - 1 / Number.MAX_VALUE) !== Number.POSITIVE_INFINITY) {}
}