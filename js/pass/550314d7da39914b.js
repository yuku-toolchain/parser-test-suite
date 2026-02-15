var callCount = 0;
var obj = {
  *method({x: y = 33}) {
    callCount = callCount + 1;
  }
};
obj.method({}).next();