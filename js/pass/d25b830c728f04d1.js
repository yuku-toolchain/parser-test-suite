var unreachable = 0;
function* g() {
  yield;
  unreachable += 1;
  try {} finally {}
}
var iter = g();
var result;
iter.next();
result = iter.return(45);
result = iter.next();