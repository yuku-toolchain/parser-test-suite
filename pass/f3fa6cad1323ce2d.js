var callCount = 0;
class C {
  static async *method({x: [y]} = {
    x: [45]
  }) {
    callCount = callCount + 1;
  }
}
C.method().next().then(() => {}).then($DONE, $DONE);