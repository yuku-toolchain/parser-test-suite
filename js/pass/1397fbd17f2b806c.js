var callCount = 0;
var obj = {
  async *method(a, b) {
    callCount = callCount + 1;
  }
};
var ref = obj.method;
ref(42, 39, 1).next().then(() => {}).then($DONE, $DONE);