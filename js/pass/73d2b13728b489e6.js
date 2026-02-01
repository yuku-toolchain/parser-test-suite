var f = Function(void 0, "");
var fproto = f.prototype;
try {} catch (e) {
  if (e instanceof Test262Error) {
    throw e;
  }
}
if (f.prototype !== fproto) {}