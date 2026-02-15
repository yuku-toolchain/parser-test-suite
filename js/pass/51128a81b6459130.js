var callCount = 0;
function f([...{length}]) {
  callCount = callCount + 1;
}
f([1, 2, 3]);