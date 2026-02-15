var proto = Error.prototype;
try {} catch (e) {
  if (e instanceof Test262Error) {
    throw e;
  }
}
if (Error.prototype !== proto) {}