var iter, result;
function* g() {
  iter.return(42);
}
iter = g();
result = iter.next();