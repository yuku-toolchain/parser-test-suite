var count = 0;
var g = function* () {
  count += 1;
  yield;
  count += 1;
  yield;
  count += 1;
};
var x;
var counter = 0;
for ([...x] of [g()]) {
  counter += 1;
}