var values = [1, 2, 3, 4, 5];
var callCount = 0;
class C {
  *method([...x]) {
    callCount = callCount + 1;
  }
}
new C().method(values).next();