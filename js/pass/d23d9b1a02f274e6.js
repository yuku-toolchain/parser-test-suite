var returnCallCount = 0;
var underlying = {
  next() {},
  return() {
    returnCallCount += 1;
    var result = it.next();
    return {};
  }
};
var it = Iterator.zipKeyed({
  a: underlying
});
var result = it.return();