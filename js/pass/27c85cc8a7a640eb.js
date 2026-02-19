var complete = false;
var iter, iterResult, str;
function* g() {
  str = `1${yield}3${4}5`;
  complete = true;
}
iter = g();
iterResult = iter.next();
iterResult = iter.next(2);