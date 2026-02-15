var iter = (function* () {})();
iter.next();
var callCount = 0;
var obj = {
  async *method([]) {
    callCount = callCount + 1;
  }
};
obj.method(iter).next().then(() => {}).then($DONE, $DONE);