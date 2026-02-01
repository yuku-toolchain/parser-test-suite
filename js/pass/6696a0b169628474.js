var callCount = 0;
var obj = {
  async *method([_, x] = []) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);