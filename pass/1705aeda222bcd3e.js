var callCount = 0;
class C {
  static async *method({x}) {
    callCount = callCount + 1;
  }
}
C.method({
  x: 23
}).next().then(() => {}).then($DONE, $DONE);