var x = 0;
var callCount = 0;
function* f(x = x) {
  callCount = callCount + 1;
}