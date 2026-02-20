var callCount = 0;
var obj = {
  async *method([...x] = [1]) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);