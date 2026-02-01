var callCount = 0;
class C {
  async method(a, b = 39) {
    callCount = callCount + 1;
  }
}
var ref = C.prototype.method;
ref(42, undefined, 1).then(() => {}).then($DONE, $DONE);