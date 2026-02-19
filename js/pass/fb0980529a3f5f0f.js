var values = [2, 1, 3];
var callCount = 0;
function f([[...x] = values] = []) {
  callCount = callCount + 1;
}
f();