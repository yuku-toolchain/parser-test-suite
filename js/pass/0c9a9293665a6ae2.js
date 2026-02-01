var callCount = 0;
var obj = {
  async *method(a) {
    callCount = callCount + 1;
  }
};
var ref = obj.method;
ref(42, 39).next().then(() => {}).then($DONE, $DONE);