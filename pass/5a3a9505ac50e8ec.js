var x = [0, 1, 2, 3];
var arr = x.splice(1, 3, 4, 5);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 3) {}
if (arr[0] !== 1) {}
if (arr[1] !== 2) {}
if (arr[2] !== 3) {}
if (x.length !== 3) {}
if (x[0] !== 0) {}
if (x[1] !== 4) {}
if (x[2] !== 5) {}