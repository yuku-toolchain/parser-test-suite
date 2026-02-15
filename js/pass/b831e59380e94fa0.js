var iter, result;
function* g() {
  iter.throw(42);
}
iter = g();
result = iter.next();