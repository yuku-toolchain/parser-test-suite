var callCount = 0;
var C = class {
  *method({a, b, ...rest} = {
    x: 1,
    y: 2,
    a: 5,
    b: 3
  }) {
    callCount = callCount + 1;
  }
};
new C().method().next();