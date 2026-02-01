var initCount = 0;
var callCount = 0;
var C = class {
  static method([[] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
};
C.method([[23]]);