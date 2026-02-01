var x = 0;
var callCount = 0;
function f(x = y, y) {
  callCount = callCount + 1;
}