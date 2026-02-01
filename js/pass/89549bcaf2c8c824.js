var values = [1, 2, 3];
var callCount = 0;
class C {
  *method([...[...x]] = values) {
    callCount = callCount + 1;
  }
}
new C().method().next();