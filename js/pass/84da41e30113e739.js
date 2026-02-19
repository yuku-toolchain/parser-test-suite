var callCount = 0;
var __obj = {
  async method(a) {
    callCount = callCount + 1;
  }
};
var ref = __obj.method;
ref(42, 39).then(() => {}).then($DONE, $DONE);