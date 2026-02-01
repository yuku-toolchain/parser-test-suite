var yield = 22;
var x;
var counter = 0;
for ({x: [x = yield]} of [{
  x: []
}]) {
  counter += 1;
}