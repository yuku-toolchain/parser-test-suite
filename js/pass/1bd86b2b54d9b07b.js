var callCount = 0;
class C {
  static async *method([x = 23] = [undefined]) {
    callCount = callCount + 1;
  }
}
C.method().next().then(() => {}).then($DONE, $DONE);