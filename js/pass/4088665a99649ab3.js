var iter = (function* () {})();
iter.next();
var callCount = 0;
var C = class {
  async *method([] = iter) {
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);