var callCount = 0;
function f([...{length}] = [1, 2, 3]) {
  callCount = callCount + 1;
}
f();