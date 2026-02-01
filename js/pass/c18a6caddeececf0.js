var callCount = 0;
var obj = {
  async *method() {
    callCount = callCount + 1;
  }
};
var ref = obj.method;
ref(42, null).next().then(() => {}).then($DONE, $DONE);