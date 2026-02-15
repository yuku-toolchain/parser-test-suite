var callCount = 0;
var obj = {
  async *method([...x]) {
    callCount = callCount + 1;
  }
};
obj.method([1]).next().then(() => {}).then($DONE, $DONE);