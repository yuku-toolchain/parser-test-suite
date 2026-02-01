var callCount = 0;
class C {
  static async *method([...[x, y, z]]) {
    callCount = callCount + 1;
  }
}
C.method([3, 4, 5]).next().then(() => {}).then($DONE, $DONE);