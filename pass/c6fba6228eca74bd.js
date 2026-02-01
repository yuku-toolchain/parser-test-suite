var callCount = 0;
class C {
  async method(a) {
    callCount = callCount + 1;
  }
}
var ref = C.prototype.method;
ref(42, 39).then(() => {}).then($DONE, $DONE);