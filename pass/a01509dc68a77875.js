var callCount = 0;
var C = class {
  async *method({gen = function* () {}, xGen = function* x() {}} = {}) {
    callCount = callCount + 1;
  }
};
new C().method().next().then(() => {}).then($DONE, $DONE);