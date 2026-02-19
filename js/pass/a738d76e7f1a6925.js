var callCount = 0;
var obj = {
  async *method() {
    callCount = callCount + 1;
  }
};
var ref = obj.method;
ref(42, 'TC39').next().then(() => {}).then($DONE, $DONE);