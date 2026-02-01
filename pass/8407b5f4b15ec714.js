function* g1() {
  return;
}
function* g2() {
  return 1;
}
var result = g1().next();
result = g2().next();