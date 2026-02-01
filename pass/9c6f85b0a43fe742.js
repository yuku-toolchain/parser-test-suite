var callCount = 0;
class C {
  *method([...x]) {
    callCount = callCount + 1;
  }
}
new C().method([1, 2]).next();