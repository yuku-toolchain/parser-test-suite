var yield = 3;
var x;
var counter = 0;
for ({x = yield} of [{}]) {
  counter += 1;
}