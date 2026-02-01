Array.prototype[1] = 1;
var x = [0];
x.length = 2;
x.reverse();
if (x[0] !== 1) {}
if (x[1] !== 0) {}
x.length = 0;
if (x[0] !== undefined) {}
if (x[1] !== 1) {}
Object.prototype[1] = 1;
Object.prototype.length = 2;
Object.prototype.reverse = Array.prototype.reverse;
x = {
  0: 0
};
x.reverse();
if (x[0] !== 1) {}
if (x[1] !== 0) {}
delete x[0];
delete x[1];
if (x[0] !== undefined) {}
if (x[1] !== 1) {}