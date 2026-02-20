var initCount = 0;
var callCount = 0;
class C {
  static *method([[] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
}
C.method([[23]]).next();