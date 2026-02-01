var callCount = 0;
function f({x: y = 33} = {}) {
  callCount = callCount + 1;
}
f();