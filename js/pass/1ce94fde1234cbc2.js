var callCount = 0;
function* f([...x] = [1, 2]) {
  callCount = callCount + 1;
}
f().next();