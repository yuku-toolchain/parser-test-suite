var inTry = 0;
var unreachable = 0;
function* g() {
  try {
    inTry += 1;
    yield;
    unreachable += 1;
  } catch (e) {
    throw e;
  }
  unreachable += 1;
}
var iter = g();
var result;
result = iter.next();
result = iter.return(44);
result = iter.next();