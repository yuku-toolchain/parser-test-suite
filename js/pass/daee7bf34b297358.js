var values = [2, 1, 3];
var initCount = 0;
var callCount = 0;
var C = class {
  static async *method([[...x] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
};
C.method([values]).next().then(() => {}).then($DONE, $DONE);