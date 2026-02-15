var count = 0;
var callCount = 0;
var obj = {
  *method({...x}) {
    callCount = callCount + 1;
  }
};
obj.method({
  get v() {
    count++;
    return 2;
  }
}).next();