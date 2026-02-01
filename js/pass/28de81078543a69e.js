var callCount = 0;
function* f({x: [y]} = {
  x: [45]
}) {
  callCount = callCount + 1;
}
f().next();