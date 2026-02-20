var callCount = 0;
function* g() {
  callCount += 1;
}
var iterCount = 0;
for (const [[] = g()] of [[[]]]) {
  iterCount += 1;
}