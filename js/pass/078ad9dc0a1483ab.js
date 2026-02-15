var iter = (function* () {})();
iter.next();
var callCount = 0;
var C = class {
  static async *method([]) {
    callCount = callCount + 1;
  }
};
C.method(iter).next().then(() => {}).then($DONE, $DONE);