var callCount = 0;
var obj = {
  async *method([...{length}]) {
    callCount = callCount + 1;
  }
};
obj.method([1, 2, 3]).next().then(() => {}).then($DONE, $DONE);