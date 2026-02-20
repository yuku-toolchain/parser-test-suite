var callCount = 0;
var C = class {
  static *method([arrow = () => {}] = []) {
    callCount = callCount + 1;
  }
};
C.method().next();