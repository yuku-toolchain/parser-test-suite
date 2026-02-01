var callCount = 0;
class C {
  async *method() {
    callCount = callCount + 1;
  }
}
var ref = C.prototype.method;
ref(42, 'TC39').next().then(() => {}).then($DONE, $DONE);