class Super {
  set f(v) {}
}
class Base extends Super {
  f = "Test262";
}
let o = new Base();