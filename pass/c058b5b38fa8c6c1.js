var x = {};
var counter = 0;
for ({xy: x.y} of [{
  xy: 4
}]) {
  counter += 1;
}