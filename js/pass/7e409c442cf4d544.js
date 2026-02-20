var x;
var counter = 0;
for ({x = 1} of [{
  x: undefined
}]) {
  counter += 1;
}