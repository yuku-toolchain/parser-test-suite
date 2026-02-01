var x = null;
var w;
var counter = 0;
for ({w, a: x} of [{
  a: 4
}]) {
  counter += 1;
}