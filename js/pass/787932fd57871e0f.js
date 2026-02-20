var callCount = 0;
var obj = {
  *method({x: y}) {
    callCount = callCount + 1;
  }
};
obj.method({
  x: 23
}).next();