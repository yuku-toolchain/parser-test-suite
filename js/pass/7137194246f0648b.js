var callCount = 0;
class C {
  static async *method({w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }} = {
    w: undefined
  }) {
    callCount = callCount + 1;
  }
}
C.method().next().then(() => {}).then($DONE, $DONE);