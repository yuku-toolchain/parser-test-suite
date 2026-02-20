var x = 0;
var y = 1;
var z = [42];
class C {
  a = (x in z);
  b = (y in z);
}
var c = new C();