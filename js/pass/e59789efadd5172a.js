var x = 0;
var callCount = 0;
var obj = {
  async *method(x, y = x, z = y) {
    callCount = callCount + 1;
  }
};
var ref = obj.method;
ref(3).next().then(() => {}).then($DONE, $DONE);