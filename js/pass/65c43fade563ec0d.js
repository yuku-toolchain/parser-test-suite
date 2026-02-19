var initCount = 0;
var callCount = 0;
var C = class {
  *method([[] = (function () {
    initCount += 1;
  })()] = [[23]]) {
    callCount = callCount + 1;
  }
};
new C().method().next();