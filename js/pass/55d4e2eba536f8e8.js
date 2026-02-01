var callCount = 0;
class C {
  *method([...{length}]) {
    callCount = callCount + 1;
  }
}
new C().method([1, 2, 3]).next();