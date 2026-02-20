var callCount = 0;
class C {
  static async *method() {
    callCount = callCount + 1;
  }
}
var ref = C.method;
ref(42, undefined).next().then(() => {}).then($DONE, $DONE);