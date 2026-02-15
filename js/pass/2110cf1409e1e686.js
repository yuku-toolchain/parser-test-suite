var callCount = 0;
function* f([x, y, z]) {
  callCount = callCount + 1;
}
f([1, 2, 3]).next();