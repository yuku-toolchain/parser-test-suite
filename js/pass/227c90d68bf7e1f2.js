class C1 {
  *m(x = 42) {}
}
var m1 = C1.prototype.m;
class C2 {
  *m(x = 42, y) {}
}
var m2 = C2.prototype.m;
class C3 {
  *m(x, y = 42) {}
}
var m3 = C3.prototype.m;
class C4 {
  *m(x, y = 42, z) {}
}
var m4 = C4.prototype.m;