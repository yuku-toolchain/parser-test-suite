var m1 = (class {
  m(x = 42) {}
}).prototype.m;
var m2 = (class {
  m(x = 42, y) {}
}).prototype.m;
var m3 = (class {
  m(x, y = 42) {}
}).prototype.m;
var m4 = (class {
  m(x, y = 42, z) {}
}).prototype.m;