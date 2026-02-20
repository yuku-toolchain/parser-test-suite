var callCount = 0;
var obj = {
  async *method([x, y, z]) {
    callCount = callCount + 1;
  }
};
obj.method([1, 2, 3]).next().then(() => {}).then($DONE, $DONE);