var callCount = 0;
var obj = {
  async *method(a, b = 39) {
    callCount = callCount + 1;
  }
};
var ref = obj.method;
ref(42, undefined, 1).next().then(() => {}).then($DONE, $DONE);