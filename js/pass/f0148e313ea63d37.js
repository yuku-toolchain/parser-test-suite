var callCount = 0;
var C = class {
  async *method([{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }]) {
    callCount = callCount + 1;
  }
};
new C().method([]).next().then(() => {}).then($DONE, $DONE);