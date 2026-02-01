var count = 0;
var callCount = 0;
var C = class {
  *method({...x}) {
    callCount = callCount + 1;
  }
};
new C().method({
  get v() {
    count++;
    return 2;
  }
}).next();