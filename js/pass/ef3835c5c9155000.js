var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
var obj = {
  async *method([] = iter) {
    callCount = callCount + 1;
  }
};
obj.method().next().then(() => {}).then($DONE, $DONE);