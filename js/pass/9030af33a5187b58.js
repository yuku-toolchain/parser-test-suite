var callCount = 0;
var obj = {
  async *method([x = 23]) {
    callCount = callCount + 1;
  }
};
obj.method([undefined]).next().then(() => {}).then($DONE, $DONE);