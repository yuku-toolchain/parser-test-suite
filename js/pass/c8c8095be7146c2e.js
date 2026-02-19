var callCount = 0;
function f(x, _ = 0) {
  arguments[0] = 1;
  x = 2;
  callCount = callCount + 1;
}
f();