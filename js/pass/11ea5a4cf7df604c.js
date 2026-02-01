var callCount = 0;
var C = class {
  static async *method([[x, y, z] = [4, 5, 6]] = [[7, 8, 9]]) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);