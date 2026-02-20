var callCount = 0;
function f([...x] = [1]) {
  callCount = callCount + 1;
}
f();