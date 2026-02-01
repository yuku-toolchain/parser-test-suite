var callCount = 0;
var C = class {
  static async *method([...x]) {
    callCount = callCount + 1;
  }
};
C.method([1, 2]).next().then(() => {}).then($DONE, $DONE);