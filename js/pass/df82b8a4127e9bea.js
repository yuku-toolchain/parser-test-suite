var callCount = 0;
function f([x = 23] = [undefined]) {
  callCount = callCount + 1;
}
f();