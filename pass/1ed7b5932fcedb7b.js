var bodyCount = 0;
function* G() {
  bodyCount += 1;
}
var iter = G();
var result;
result = iter.return(56);
result = iter.next();