var callCount = 0;
var C = class {
  static async *method([_, x] = []) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);