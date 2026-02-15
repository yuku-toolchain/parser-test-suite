var x = [0, 1, 2, 3];
var arr = x.splice(-4, 3, 4, 5);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 3) {}
if (arr[0] !== 0) {}
if (arr[1] !== 1) {}
if (arr[2] !== 2) {}
if (x.length !== 3) {}
if (x[0] !== 4) {}
if (x[1] !== 5) {}
if (x[2] !== 3) {}