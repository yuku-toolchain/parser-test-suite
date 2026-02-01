var iter, result;
var obj = {
  *yield() {
    (yield 3) + (yield 4);
  }
};
iter = obj.yield();
result = iter.next();
result = iter.next();
result = iter.next();