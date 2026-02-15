var yield;
var counter = 0;
for ({yield} of [{
  yield: 3
}]) {
  counter += 1;
}