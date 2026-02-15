var callCount = 0;
var obj = {
  async *method([...[x, y, z]]) {
    callCount = callCount + 1;
  }
};
obj.method([3, 4, 5]).next().then(() => {}).then($DONE, $DONE);