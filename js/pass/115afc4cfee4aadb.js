var callCount = 0;
function* f({a, b, ...rest}) {
  callCount = callCount + 1;
}
f({
  x: 1,
  y: 2,
  a: 5,
  b: 3
}).next();