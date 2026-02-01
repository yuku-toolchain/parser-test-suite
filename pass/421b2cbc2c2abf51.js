var callCount = 0;
function f([_, x]) {
  callCount = callCount + 1;
}
f([]);