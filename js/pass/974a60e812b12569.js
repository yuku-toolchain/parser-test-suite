var callCount = 0;
var C = class {
  static async *method([x, y, z]) {
    callCount = callCount + 1;
  }
};
C.method([1, 2, 3]).next().then(() => {}).then($DONE, $DONE);