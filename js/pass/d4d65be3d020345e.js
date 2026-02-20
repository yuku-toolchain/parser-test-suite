var obj = {
  *foo(a) {
    yield a + 1;
    return;
  }
};
var g = obj.foo(3);