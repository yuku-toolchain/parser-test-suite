var x = 0;
function fn1() {
  x += 1;
}
function fn2() {}
class C {
  x = fn1();
  y = fn2();
  z = fn1();
}