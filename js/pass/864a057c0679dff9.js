var x = 1;
var C = class {
  [x++] = x++;
  [x++] = x++;
};
var c1 = new C();
var c2 = new C();