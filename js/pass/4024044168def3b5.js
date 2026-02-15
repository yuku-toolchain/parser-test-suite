var returnCallCount = 0;
var underlying = {
  next() {},
  return() {
    returnCallCount += 1;
    var result = it.return();
    return {};
  }
};
var it = Iterator.zipKeyed({
  a: underlying
});
var result = it.return();