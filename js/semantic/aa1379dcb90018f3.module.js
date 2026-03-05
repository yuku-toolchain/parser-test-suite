var iter, result;
function* yield() {
  (yield 3) + (yield 4);
}
iter = yield();
result = iter.next();
result = iter.next();
result = iter.next();