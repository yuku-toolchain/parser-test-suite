Array.prototype[1] = 1;
var x = [0];
x.length = 2;
if (x.join() !== "0,1") {}
Object.prototype[1] = 1;
Object.prototype.length = 2;
Object.prototype.join = Array.prototype.join;
x = {
  0: 0
};
if (x.join() !== "0,1") {}