var callCount = 0;
var C = class {
  static async *method([x = 23]) {
    callCount = callCount + 1;
  }
};
C.method([undefined]).next().then(() => {}).then($DONE, $DONE);