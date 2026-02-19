var callCount = 0;
class C {
  *method([x, y, z] = [1, 2, 3]) {
    callCount = callCount + 1;
  }
}
new C().method().next();