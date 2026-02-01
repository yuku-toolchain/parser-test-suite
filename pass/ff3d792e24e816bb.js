var x = [0, 1];
var arr = x.splice(2, -1, 2, 3);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 0) {}
if (x.length !== 4) {}
if (x[0] !== 0) {}
if (x[1] !== 1) {}
if (x[2] !== 2) {}
if (x[3] !== 3) {}