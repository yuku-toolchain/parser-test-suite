var initCount = 0;
var callCount = 0;
function f([[] = (function () {
  initCount += 1;
})()] = [[23]]) {
  callCount = callCount + 1;
}
f();