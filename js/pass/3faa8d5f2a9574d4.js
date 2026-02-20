var callCount = 0;
function* g() {
  callCount += 1;
}
var iterCount = 0;
for (let [[] = g()] = [[]]; iterCount < 1; ) {
  iterCount += 1;
}