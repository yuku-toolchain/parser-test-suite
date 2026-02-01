var x = 0;
var callCount = 0;
class C {
  static *method(x = y, y) {
    callCount = callCount + 1;
  }
}