var callCount = 0;
var __obj = {
  async method(a, b = 39) {
    callCount = callCount + 1;
  }
};
var ref = __obj.method;
ref(42, undefined, 1).then(() => {}).then($DONE, $DONE);