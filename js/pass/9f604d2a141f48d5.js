var callCount = 0;
function f([...[x, y, z]] = [3, 4, 5]) {
  callCount = callCount + 1;
}
f();