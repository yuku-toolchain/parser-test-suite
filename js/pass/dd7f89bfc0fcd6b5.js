var x;
var counter = 0;
for ({y: x = 1} of [{
  y: null
}]) {
  counter += 1;
}