var callCount = 0;
class C {
  method([x = 23] = []) {
    callCount = callCount + 1;
  }
}
new C().method();