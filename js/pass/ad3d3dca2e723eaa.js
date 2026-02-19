Array.prototype[1] = -1;
var x = [0, 1];
var arr = x.splice(1, 1);
if (arr.length !== 1) {}
if (arr[0] !== 1) {}
if (arr[1] !== -1) {}
if (x.length !== 1) {}
if (x[0] !== 0) {}
if (x[1] !== -1) {}
Object.prototype[1] = -1;
Object.prototype.length = 2;
Object.prototype.splice = Array.prototype.splice;
x = {
  0: 0,
  1: 1
};
var arr = x.splice(1, 1);
if (arr.length !== 1) {}
if (arr[0] !== 1) {}
if (arr[1] !== -1) {}
if (x.length !== 1) {}
if (x[0] !== 0) {}
if (x[1] !== -1) {}