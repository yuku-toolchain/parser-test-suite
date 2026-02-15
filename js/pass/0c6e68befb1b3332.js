var callCount = 0;
function* f() {
  callCount++;
}
f().next();