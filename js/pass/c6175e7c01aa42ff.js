var callCount = 0;
class C {
  static async *method([x, y, z] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
}
C.method().next().then(() => {}).then($DONE, $DONE);