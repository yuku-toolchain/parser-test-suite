var callCount = 0;
var obj = {
  async *method([...[x, y, z]] = [3, 4, 5]) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);