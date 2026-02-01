Array.prototype[1] = -1;
var x = [0, 1];
x.length = 2;
var pop = x.pop();
if (pop !== 1) {}
if (x[1] !== -1) {}
Object.prototype[1] = -1;
Object.prototype.length = 2;
Object.prototype.pop = Array.prototype.pop;
x = {
  0: 0,
  1: 1
};
var pop = x.pop();
if (pop !== 1) {}
if (x[1] !== -1) {}
if (x.length !== 1) {}
delete x.length;
if (x.length !== 2) {}