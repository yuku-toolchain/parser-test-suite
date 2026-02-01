var callCount = 0;
var C = class {
  *method(x = arguments[2], y = arguments[3], z) {
    callCount = callCount + 1;
  }
};
C.prototype.method(undefined, undefined, 'third', 'fourth').next();