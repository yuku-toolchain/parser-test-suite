var callCount = 0;
class C {
  static async *method({a, b, ...rest} = {
    x: 1,
    y: 2,
    a: 5,
    b: 3
  }) {
    callCount = callCount + 1;
  }
}
C.method().next().then(() => {}).then($DONE, $DONE);