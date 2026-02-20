var callCount = 0;
class C {
  static method(x = arguments[2], y = arguments[3], z) {
    callCount = callCount + 1;
  }
}
C.method(undefined, undefined, 'third', 'fourth');