var afterFinally = 0;
var unreachable = 0;
function* g() {
  try {} finally {}
  afterFinally += 1;
  yield;
  unreachable += 1;
}
var iter = g();
var result;
iter.next();
result = iter.return(45);
result = iter.next();