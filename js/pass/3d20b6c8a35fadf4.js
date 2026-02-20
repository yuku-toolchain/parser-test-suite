var callCount = 0;
class C {
  static method({x: [y]} = {
    x: [45]
  }) {
    callCount = callCount + 1;
  }
}
C.method();