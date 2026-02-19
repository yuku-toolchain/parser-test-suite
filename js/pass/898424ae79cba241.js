var callCount = 0;
class C {
  method([...[x, y, z]]) {
    callCount = callCount + 1;
  }
}
new C().method([3, 4, 5]);