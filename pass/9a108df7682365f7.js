var xFn, fn;
var counter = 0;
for ({x: xFn = function x() {}, x: fn = function () {}} of [{}]) {
  counter += 1;
}