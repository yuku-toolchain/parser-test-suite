var initCount = 0;
var callCount = 0;
var C = class {
  static async *method([[] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
};
C.method([[23]]).next().then(() => {}).then($DONE, $DONE);