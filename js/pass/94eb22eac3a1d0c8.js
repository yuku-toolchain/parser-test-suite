var x = Symbol();
var y = Symbol();
class C {
  [x];
  [y] = 42;
  foo = "foobar";
  bar = "barbaz";
}
var c = new C();