var inFinally = 0;
var unreachable = 0;
function* g() {
  try {
    throw new Error();
    try {} catch (e) {}
  } finally {
    inFinally += 1;
    yield;
    unreachable += 1;
  }
  unreachable += 1;
}
var iter = g();
var result;
result = iter.next();
result = iter.return(45);
result = iter.next();