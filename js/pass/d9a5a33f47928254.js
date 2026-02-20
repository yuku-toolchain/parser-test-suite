var x = 0;
var callCount = 0;
var __obj = {
  async method(x, y = x, z = y) {
    callCount = callCount + 1;
  }
};
var ref = __obj.method;
ref(3).then(() => {}).then($DONE, $DONE);