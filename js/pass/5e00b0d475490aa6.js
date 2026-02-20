var callCount = 0;
function* g() {
  callCount += 1;
}
var callCount = 0;
class C {
  static *method([[] = g()] = [[]]) {
    callCount = callCount + 1;
  }
}
C.method().next();