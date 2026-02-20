var iter = (function* () {})();
iter.next();
var callCount = 0;
var obj = {
  *method([]) {
    callCount = callCount + 1;
  }
};
obj.method(iter).next();