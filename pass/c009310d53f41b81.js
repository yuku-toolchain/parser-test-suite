var callCount = 0;
function* g() {
  callCount += 1;
}
var [[] = g()] = [[]];