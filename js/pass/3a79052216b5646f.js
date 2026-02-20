var callCount = 0;
class C {
  method([x = 23] = [undefined]) {
    callCount = callCount + 1;
  }
}
new C().method();