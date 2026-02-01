var callCount = 0;
class C {
  method({x: [y]} = {
    x: [45]
  }) {
    callCount = callCount + 1;
  }
}
new C().method();