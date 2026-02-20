function __func() {
  var x = true;
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
if (!__x) {}
try {
  x = x;
} catch (e) {
  if (e instanceof Test262Error) throw e;
}