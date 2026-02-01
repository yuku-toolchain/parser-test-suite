var inTry = 0;
var inFinally = 0;
var unreachable = 0;
function* g() {
  try {
    inTry += 1;
    yield;
    try {
      unreachable += 1;
    } catch (e) {
      throw e;
    }
    unreachable += 1;
  } finally {
    inFinally += 1;
  }
  unreachable += 1;
}
var iter = g();
var result;
iter.next();
result = iter.return(45);
result = iter.next();