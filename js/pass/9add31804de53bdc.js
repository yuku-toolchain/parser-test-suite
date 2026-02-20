var callCount = 0;
var C = class {
  *method({x: y} = {
    x: 23
  }) {
    callCount = callCount + 1;
  }
};
new C().method().next();