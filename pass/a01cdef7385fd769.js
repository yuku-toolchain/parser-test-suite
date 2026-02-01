var callCount = 0;
var obj = {
  *method({a, b, ...rest}) {
    callCount = callCount + 1;
  }
};
obj.method({
  x: 1,
  y: 2,
  a: 5,
  b: 3
}).next();