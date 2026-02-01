var x = Symbol();
var y = Symbol();
class C {
  foo = "foobar";
  m() {
    return 42;
  }
  [x];
  [y] = 42;
  m2() {
    return 39;
  }
  bar = "barbaz";
}
var c = new C();