var iterations = 0;
var iter = (function* () {
  iterations += 1;
})();
var callCount = 0;
function* f([] = iter) {
  callCount = callCount + 1;
}
f().next();