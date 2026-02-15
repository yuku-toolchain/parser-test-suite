var x;
var counter = 0;
for ({z: x, a: x} of [{
  a: 2,
  z: 1
}]) {
  counter += 1;
}