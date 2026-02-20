Array.prototype[0] = 1;
var x = [];
x.length = 1;
var unshift = x.unshift(0);
if (unshift !== 2) {}
if (x[0] !== 0) {}
if (x[1] !== 1) {}
delete x[0];
if (x[0] !== 1) {}
Object.prototype[0] = 1;
Object.prototype.length = 1;
Object.prototype.unshift = Array.prototype.unshift;
x = {};
var unshift = x.unshift(0);
if (unshift !== 2) {}
if (x[0] !== 0) {}
if (x[1] !== 1) {}
delete x[0];
if (x[0] !== 1) {}
if (x.length !== 2) {}
delete x.length;
if (x.length !== 1) {}