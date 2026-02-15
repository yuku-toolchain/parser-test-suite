var callCount = 0;
var obj = {
  async *method([{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }]) {
    callCount = callCount + 1;
  }
};
obj.method([]).next().then(() => {}).then($DONE, $DONE);