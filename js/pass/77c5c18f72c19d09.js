var x = false;
class C {
  [x] = x;
}
var c1 = new C();
x = true;
var c2 = new C();