var callCount = 0;
class C {
  async *method({w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }} = {
    w: undefined
  }) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);