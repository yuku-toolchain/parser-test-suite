var callCount = 0;
class C {
  static method([x = 23] = [undefined]) {
    callCount = callCount + 1;
  }
}
C.method();