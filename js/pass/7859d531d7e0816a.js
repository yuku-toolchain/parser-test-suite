var callCount = 0;
class C {
  static async *method([...x]) {
    callCount = callCount + 1;
  }
}
C.method([1, 2]).next().then(() => {}).then($DONE, $DONE);