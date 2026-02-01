var callCount = 0;
var ref;
ref = function* () {
  callCount = callCount + 1;
};
ref(42).next();