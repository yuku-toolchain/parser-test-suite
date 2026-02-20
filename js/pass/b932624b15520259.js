var callCount = 0;
class C {
  async method(a, b) {
    callCount = callCount + 1;
  }
}
var ref = C.prototype.method;
ref(42, 39, 1).then(() => {}).then($DONE, $DONE);