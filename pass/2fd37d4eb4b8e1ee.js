var s = Symbol();
var counter = 0;
for ({} of [s]) {
  counter += 1;
}