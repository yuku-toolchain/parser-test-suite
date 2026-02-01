var obj = Object.prototype;
try {
  Object.prototype();
} catch (e) {
  if (e instanceof Test262Error) {
    throw e;
  }
}