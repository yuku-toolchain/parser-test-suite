Array.prototype[1] = -1;
var x = [1, 0];
x.length = 2;
x.sort();
if (x[0] !== 0) {}
if (x[1] !== 1) {}
x.length = 0;
if (x[0] !== undefined) {}
if (x[1] !== -1) {}
Object.prototype[1] = -1;
Object.prototype.length = 2;
Object.prototype.sort = Array.prototype.sort;
x = {
  0: 1,
  1: 0
};
x.sort();
if (x[0] !== 0) {}
if (x[1] !== 1) {}
delete x[0];
delete x[1];
if (x[0] !== undefined) {}
if (x[1] !== -1) {}