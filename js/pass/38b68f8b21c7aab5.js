var callCount = 0;
class C {
  async *method([{u: v, w: x, y: z} = {
    u: 444,
    w: 555,
    y: 666
  }]) {
    callCount = callCount + 1;
  }
}
new C().method([{
  u: 777,
  w: 888,
  y: 999
}]).next().then(() => {}).then($DONE, $DONE);