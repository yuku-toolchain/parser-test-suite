function __func() {
  x = 1;
  return x;
}
try {
  x = x;
} catch (e) {
  if (e instanceof Test262Error) throw e;
}
try {
  var __x = __func();
} catch (e) {}
if (__x !== 1) {}
if (x !== 1) {}