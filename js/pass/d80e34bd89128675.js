Array.prototype[0] = -1;
var x = [];
x.length = 1;
var arr = x.splice(0, 1);
if (arr.length !== 1) {}
if (arr[0] !== -1) {}
delete arr[0];
if (arr[0] !== -1) {}
if (x.length !== 0) {}
if (x[0] !== -1) {}
Object.prototype[0] = -1;
Object.prototype.length = 1;
Object.prototype.splice = Array.prototype.splice;
x = {};
var arr = x.splice(0, 1);
if (arr.length !== 1) {}
if (arr[0] !== -1) {}
delete arr[0];
if (arr[0] !== -1) {}
if (x.length !== 0) {}
if (x[0] !== -1) {}