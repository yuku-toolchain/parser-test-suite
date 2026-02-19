var callCount = 0;
function f({w: [x, y, z] = [4, 5, 6]} = {}) {
  callCount = callCount + 1;
}
f();