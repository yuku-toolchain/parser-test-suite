var arr = [2, 3];
var callCount = 0;
class C {
  async *method() {
    callCount = callCount + 1;
  }
}
var ref = C.prototype.method;
ref(42, ...[1], ...arr).next().then(() => {}).then($DONE, $DONE);