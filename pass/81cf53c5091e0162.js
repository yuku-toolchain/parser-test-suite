var callCount = 0;
var C = class {
  async *method({fn = function () {}, xFn = function x() {}}) {
    callCount = callCount + 1;
  }
};
new C().method({}).next().then(() => {}).then($DONE, $DONE);