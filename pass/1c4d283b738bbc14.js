var rest, a, b;
var counter = 0;
for ({a, b, ...rest} of [{
  x: 1,
  y: 2,
  a: 5,
  b: 3
}]) {
  counter += 1;
}