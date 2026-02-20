var x = false;
var C = class {
  [x] = x;
};
var c1 = new C();
x = true;
var c2 = new C();