var result;
var obj = {
  *g() {
    yield* g2();
  }
};
var g2 = function* () {};
result = obj.g().next();