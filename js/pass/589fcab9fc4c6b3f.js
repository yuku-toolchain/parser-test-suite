var x;
var counter = 0;
for ({y: x = 1} of [{
  y: 2
}]) {
  counter += 1;
}