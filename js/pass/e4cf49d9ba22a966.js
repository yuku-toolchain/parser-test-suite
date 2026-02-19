var callCount = 0;
class C {
  async *method({w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }}) {
    callCount = callCount + 1;
  }
}
new C().method({
  w: undefined
}).next().then(() => {}).then($DONE, $DONE);