var callCount = 0;
class C {
  method([...x] = [1, 2]) {
    callCount = callCount + 1;
  }
}
new C().method();