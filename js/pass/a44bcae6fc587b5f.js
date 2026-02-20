var inCatch = 0;
var unreachable = 0;
function* g() {
  try {
    throw new Error();
  } catch (e) {
    inCatch += 1;
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