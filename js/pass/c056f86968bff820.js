Array.prototype[1] = 1;
var x = [0];
x.length = 2;
var shift = x.shift();
if (shift !== 0) {}
if (x[0] !== 1) {}
if (x[1] !== 1) {}
Object.prototype[1] = 1;
Object.prototype.length = 2;
Object.prototype.shift = Array.prototype.shift;
x = {
  0: 0
};
var shift = x.shift();
if (shift !== 0) {}
if (x[0] !== 1) {}
if (x[1] !== 1) {}
if (x.length !== 1) {}
delete x.length;
if (x.length !== 2) {}