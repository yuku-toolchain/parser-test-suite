var callCount = 0;
class C {
  static async *method([...{length}]) {
    callCount = callCount + 1;
  }
}
C.method([1, 2, 3]).next().then(() => {}).then($DONE, $DONE);