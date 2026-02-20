var x = [0, 1];
var arr = x.splice(0, NaN);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 0) {}
if (x.length !== 2) {}
if (x[0] !== 0) {}
if (x[1] !== 1) {}