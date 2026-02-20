var callCount = 0;
class C {
  async *method() {
    callCount = callCount + 1;
  }
}
var ref = C.prototype.method;
ref(42).next().then(() => {}).then($DONE, $DONE);