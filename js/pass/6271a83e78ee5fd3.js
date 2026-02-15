var initCount = 0;
var iterCount = 0;
var iter = (function* () {
  iterCount += 1;
})();
var callCount = 0;
function f([[] = (function () {
  initCount += 1;
  return iter;
})()] = []) {
  callCount = callCount + 1;
}
f();