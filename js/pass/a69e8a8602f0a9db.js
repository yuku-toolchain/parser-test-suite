var iter = (function* () {})();
iter.next();
var callCount = 0;
var f;
f = ([] = iter) => {
  callCount = callCount + 1;
};
f();