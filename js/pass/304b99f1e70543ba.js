var x = Symbol();
var y = Symbol();
class C {
  [x];
  [y] = 42;
}
var c = new C();