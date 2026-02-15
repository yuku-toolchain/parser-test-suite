var callCount = 0;
class C {
  static async *method(a, b) {
    callCount = callCount + 1;
  }
}
var ref = C.method;
ref(42, 39, 1).next().then(() => {}).then($DONE, $DONE);