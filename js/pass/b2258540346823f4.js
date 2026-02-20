var x;
var counter = 0;
for ({x = 1} of [{
  x: 2
}]) {
  counter += 1;
}