var callCount = 0;
var obj = {
  async *method([...{length}] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);