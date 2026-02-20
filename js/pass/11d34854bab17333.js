var callCount = 0;
function f([x, y, z] = [1, 2, 3]) {
  callCount = callCount + 1;
}
f();