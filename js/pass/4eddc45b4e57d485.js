var callCount = 0;
class C {
  static async method(a) {
    callCount = callCount + 1;
  }
}
var ref = C.method;
ref(42, 39).then(() => {}).then($DONE, $DONE);