var count = 0;
var g = function* () {
  count += 1;
  yield;
  count += 1;
  yield;
  count += 1;
};
var counter = 0;
for ([] of [g()]) {
  counter += 1;
}