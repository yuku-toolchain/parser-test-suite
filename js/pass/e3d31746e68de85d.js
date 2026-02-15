var callCount = 0;
class C {
  *method([arrow = () => {}] = []) {
    callCount = callCount + 1;
  }
}
new C().method().next();