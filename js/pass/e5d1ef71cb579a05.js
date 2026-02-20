var x = [0, 1, 2, 3];
var arr = x.splice(0, 3);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 3) {}
if (arr[0] !== 0) {}
if (arr[1] !== 1) {}
if (arr[2] !== 2) {}
if (x.length !== 1) {}
if (x[0] !== 3) {}