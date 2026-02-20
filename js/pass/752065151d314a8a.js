var iter = (function* () {})();
iter.next();
var callCount = 0;
function f([] = iter) {
  callCount = callCount + 1;
}
f();