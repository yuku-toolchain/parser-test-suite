var callCount = 0;
function* g() {
  callCount += 1;
}
var ranCatch = false;
try {
  throw [[]];
} catch ([[] = g()]) {
  ranCatch = true;
}