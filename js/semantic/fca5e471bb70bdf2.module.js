var yield = 'prop';
var x = {};
var counter = 0;
for ({x: x[yield]} of [{
  x: 23
}]) {
  counter += 1;
}