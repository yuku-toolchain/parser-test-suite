Object.prototype[1] = -1;
Object.prototype.length = 1;
Object.prototype.push = Array.prototype.push;
var x = {
  0: 0
};
var push = x.push(1);
if (push !== 2) {}
if (x.length !== 2) {}
if (x[1] !== 1) {}
delete x[1];
if (x[1] !== -1) {}
delete x.length;
if (x.length !== 1) {}