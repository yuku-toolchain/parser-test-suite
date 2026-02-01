var iter, result;
function* withoutVal() {
  iter.next();
}
function* withVal() {
  iter.next(42);
}
iter = withoutVal();
result = iter.next();
iter = withVal();
result = iter.next();