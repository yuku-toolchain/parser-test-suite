var iter = (function* () {})();
iter.next();
var callCount = 0;
var obj = {
  async *method([] = iter) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);