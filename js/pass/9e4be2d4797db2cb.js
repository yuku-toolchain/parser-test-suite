var x = 0;
var y = 1;
var z = [42];
var C = class {
  a = (x in z);
  b = (y in z);
};
var c = new C();