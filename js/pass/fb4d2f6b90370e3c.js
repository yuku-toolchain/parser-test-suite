var callCount = 0;
class C {
  static method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
}