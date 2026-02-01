var callCount = 0;
class C {
  method(_ = (function () {})()) {
    callCount = callCount + 1;
  }
}