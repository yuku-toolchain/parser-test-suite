var iter, result;
var g1 = function* () {
  yield;
};
var g2 = function* () {
  yield 1;
};
iter = g1();
result = iter.next();
result = iter.next();
iter = g2();
result = iter.next();
result = iter.next();