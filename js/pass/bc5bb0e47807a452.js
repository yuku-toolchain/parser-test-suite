var callCount = 0;
function* f({x: y} = {
  x: 23
}) {
  callCount = callCount + 1;
}
f().next();