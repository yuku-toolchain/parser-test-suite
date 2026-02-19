var x = [0, 1, 2, 3];
var arr = x.splice(0, Number.POSITIVE_INFINITY);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 4) {}
if (arr[0] !== 0) {}
if (arr[1] !== 1) {}
if (arr[2] !== 2) {}
if (arr[3] !== 3) {}
if (x.length !== 0) {}