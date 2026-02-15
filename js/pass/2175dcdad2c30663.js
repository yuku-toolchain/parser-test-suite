var callCount = 0;
class C {
  static method({arrow = () => {}}) {
    callCount = callCount + 1;
  }
}
C.method({});