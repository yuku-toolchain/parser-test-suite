var callCount = 0;
class C {
  static async *method([x = 23]) {
    callCount = callCount + 1;
  }
}
C.method([undefined]).next().then(() => {}).then($DONE, $DONE);