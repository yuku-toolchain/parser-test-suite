var callCount = 0;
var C = class {
  *method([_, x]) {
    callCount = callCount + 1;
  }
};
new C().method([]).next();