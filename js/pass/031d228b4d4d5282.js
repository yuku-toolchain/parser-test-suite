var iter, result;
var obj = {
  *g() {
    yield yield 1;
  }
};
iter = obj.g();
result = iter.next();
result = iter.next();
result = iter.next();