var callCount = 0;
var obj = {
  async *method([x, y, z] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);