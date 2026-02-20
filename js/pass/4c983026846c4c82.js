var callCount = 0;
class C {
  static method([...{length}]) {
    callCount = callCount + 1;
  }
}
C.method([1, 2, 3]);