var xFn, fn;
var counter = 0;
for ({xFn = function x() {}, fn = function () {}} of [{}]) {
  counter += 1;
}