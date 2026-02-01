var inCatch = 0;
var inFinally = 0;
var unreachable = 0;
function* g() {
  try {
    try {
      throw new Error();
    } catch (e) {
      inCatch += 1;
    }
  } finally {
    inFinally += 1;
  }
  yield;
  unreachable += 1;
}
var iter = g();
var result;
iter.next();
result = iter.return(45);
result = iter.next();