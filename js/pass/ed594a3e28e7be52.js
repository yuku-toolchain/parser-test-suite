var x = 0;
var callCount = 0;
class C {
  static method(x = x) {
    callCount = callCount + 1;
  }
}