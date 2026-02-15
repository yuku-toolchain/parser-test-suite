var result;
var g = function* () {
  yield* g2();
};
var g2 = function* () {};
result = g().next();