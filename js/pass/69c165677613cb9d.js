var callCount = 0;
var C = class {
  static async *method([...[x, y, z]] = [3, 4, 5]) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);