var callCount = 0;
function* f([arrow = () => {}] = []) {
  callCount = callCount + 1;
}
f().next();