Array.prototype[1] = 1;
var x = [0];
x.length = 2;
var arr = x.concat();
Object.prototype[1] = 1;
Object.prototype.length = 2;
Object.prototype.concat = Array.prototype.concat;
x = {
  0: 0
};
var arr = x.concat();