var y;
var counter = 0;
for ({x: [y]} of [{
  x: [321]
}]) {
  counter += 1;
}