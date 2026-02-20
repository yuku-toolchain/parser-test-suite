var callCount = 0;
var C = class {
  static *method({x: y = 33}) {
    callCount = callCount + 1;
  }
};
C.method({}).next();