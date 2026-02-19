var callCount = 0;
class C {
  static async *method([{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }] = []) {
    callCount = callCount + 1;
  }
}
C.method().next().then(() => {}).then($DONE, $DONE);