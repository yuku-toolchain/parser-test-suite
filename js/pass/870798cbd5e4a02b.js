var x = Symbol();
var y = Symbol();
class C {
  *m() {
    return 42;
  }
  [x];
  [y] = 42;
}
var c = new C();