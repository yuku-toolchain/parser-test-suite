var callCount = 0;
var C = class {
  static async *method([...{length}] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);