var callCount = 0;
var obj = {
  async *method([fn = function () {}, xFn = function x() {}] = []) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);