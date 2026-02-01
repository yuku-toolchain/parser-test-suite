var x = null;
var y;
var counter = 0;
for ({x, y} of [{
  x: 3
}]) {
  counter += 1;
}