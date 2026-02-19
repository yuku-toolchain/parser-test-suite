var callCount = 0;
var C = class {
  static async *method({fn = function () {}, xFn = function x() {}} = {}) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);