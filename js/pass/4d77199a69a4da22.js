var callCount = 0;
class C {
  static method([...x]) {
    callCount = callCount + 1;
  }
}
C.method([1, 2]);