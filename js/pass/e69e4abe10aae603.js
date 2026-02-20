var x = null;
var counter = 0;
for ({a: x} of [{
  a: 2
}]) {
  counter += 1;
}