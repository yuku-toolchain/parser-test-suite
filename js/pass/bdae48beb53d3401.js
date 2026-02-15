var x = 1;
class C {
  [x++] = x++;
  [x++] = x++;
}
var c1 = new C();
var c2 = new C();