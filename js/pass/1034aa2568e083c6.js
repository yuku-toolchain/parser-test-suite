try {
  new Array(1.5);
} catch (e) {}
try {
  new Array(Number.MAX_VALUE);
} catch (e) {}
try {
  new Array(Number.MIN_VALUE);
} catch (e) {}