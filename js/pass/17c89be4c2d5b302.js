class C1 {
  static m(x = 42) {}
}
var m1 = C1.m;
class C2 {
  static m(x = 42, y) {}
}
var m2 = C2.m;
class C3 {
  static m(x, y = 42) {}
}
var m3 = C3.m;
class C4 {
  static m(x, y = 42, z) {}
}
var m4 = C4.m;