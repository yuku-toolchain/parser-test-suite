var callCount = 0;
class C {
  method([_, x] = []) {
    callCount = callCount + 1;
  }
}
new C().method();