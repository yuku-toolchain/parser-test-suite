var iter, result;
var g = function* () {
  yield yield 1;
};
iter = g();
result = iter.next();
result = iter.next();
result = iter.next();