var a = 1.;
var b, rest;
var counter = 0;
for ({[a]: b, ...rest} of [{
  [a]: [1],
  bar: 2
}]) {
  counter += 1;
}