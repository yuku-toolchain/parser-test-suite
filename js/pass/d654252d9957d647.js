var callCount = 0;
function* f({x: [y]}) {
  callCount = callCount + 1;
}
f({
  x: [45]
}).next();