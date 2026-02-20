var callCount = 0;
function* g() {
  callCount += 1;
}
var callCount = 0;
class C {
  *method([[] = g()] = [[]]) {
    callCount = callCount + 1;
  }
}
new C().method().next();