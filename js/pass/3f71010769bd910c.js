var initCount = 0;
var callCount = 0;
var obj = {
  *method([[] = (function () {
    initCount += 1;
  })()]) {
    callCount = callCount + 1;
  }
};
obj.method([[23]]).next();