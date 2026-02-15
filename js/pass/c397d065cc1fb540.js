var callCount = 0;
var ref;
ref = function* (a) {
  callCount = callCount + 1;
};
ref(42, 39).next();