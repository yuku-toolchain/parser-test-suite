var callCount = 0;
var C = class {
  async *method({w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }}) {
    callCount = callCount + 1;
  }
};
new C().method({
  w: {
    x: undefined,
    z: 7
  }
}).next().then(() => {}).then($DONE, $DONE);