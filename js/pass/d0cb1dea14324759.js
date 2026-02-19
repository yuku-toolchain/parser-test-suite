var values = [1, 2, 3, 4, 5];
var callCount = 0;
class C {
  static method([...x]) {
    callCount = callCount + 1;
  }
}
C.method(values);