var src = {};
var counter = 0;
for ({...src.y} of [{
  x: 1,
  y: 2
}]) {
  counter += 1;
}