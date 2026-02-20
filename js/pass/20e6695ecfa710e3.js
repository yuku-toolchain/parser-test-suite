var x, y, xy;
var counter = 0;
for ({['x' + 'y']: x} of [{
  x: 1,
  xy: 23,
  y: 2
}]) {
  counter += 1;
}