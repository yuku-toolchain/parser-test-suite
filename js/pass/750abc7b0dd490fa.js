var callCount = 0;
class C {
  static method([_, x]) {
    callCount = callCount + 1;
  }
}
C.method([]);