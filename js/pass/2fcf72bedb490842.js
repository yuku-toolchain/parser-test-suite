var returnCallCount = 0;
var underlying = {
  next() {},
  return() {
    returnCallCount += 1;
    var result = it.next();
    return {};
  }
};
var it = Iterator.zip([underlying]);
var result = it.return();