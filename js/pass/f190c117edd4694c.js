var x = 0;
class C {
  set eval(v) {
    x = v;
  }
  set arguments(v) {
    x = v;
  }
  static set eval(v) {
    x = v;
  }
  static set arguments(v) {
    x = v;
  }
}
new C().eval = 1;
new C().arguments = 2;
C.eval = 3;
C.arguments = 4;