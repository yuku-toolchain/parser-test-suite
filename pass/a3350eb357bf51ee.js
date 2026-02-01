try {
  new Array(NaN);
} catch (e) {}
try {
  new Array(Number.POSITIVE_INFINITY);
} catch (e) {}
try {
  new Array(Number.NEGATIVE_INFINITY);
} catch (e) {}