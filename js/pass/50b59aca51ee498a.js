var callCount = 0;
function* f([x = 23]) {
  callCount = callCount + 1;
}
f([undefined]).next();