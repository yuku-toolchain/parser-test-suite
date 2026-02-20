var f = new Function("", null);
var fproto = f.prototype;
try {} catch (e) {
  if (e instanceof Test262Error) {
    throw e;
  }
}
if (f.prototype !== fproto) {}