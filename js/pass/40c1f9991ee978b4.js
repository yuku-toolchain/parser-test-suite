var unreachable = 0;
function* g() {
  yield;
  try {
    unreachable += 1;
  } catch (e) {
    throw e;
  }
  unreachable += 1;
}
var iter = g();
var result;
iter.next();
result = iter.return(45);
result = iter.next();