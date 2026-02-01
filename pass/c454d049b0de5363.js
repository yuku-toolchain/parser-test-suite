var count = 0;
var g = function* () {
  count += 1;
  yield;
  count += 1;
  yield;
  count += 1;
};
var result;
var vals = g();
result = [] = vals;