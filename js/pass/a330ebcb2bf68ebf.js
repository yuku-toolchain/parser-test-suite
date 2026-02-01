var callCount = 0;
var C = class {
  static async *method([...x] = [1, 2]) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);