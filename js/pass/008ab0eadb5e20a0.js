var a = 1.;
var b, rest;
var counter = 0;
for ({[a]: b, ...rest} of [{
  [a]: 1e0,
  bar: 2
}]) {
  counter += 1;
}