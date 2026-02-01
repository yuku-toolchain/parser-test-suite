var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
var C = class {
  async *method([...[]] = iter) {
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);