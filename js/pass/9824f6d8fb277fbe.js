var m1 = (class {
  static m(x = 42) {}
}).m;
var m2 = (class {
  static m(x = 42, y) {}
}).m;
var m3 = (class {
  static m(x, y = 42) {}
}).m;
var m4 = (class {
  static m(x, y = 42, z) {}
}).m;