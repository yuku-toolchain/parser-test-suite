var x = [0, 1, 2, 3, 4];
var arr = x.slice(-1, 5);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 1) {}
if (arr[0] !== 4) {}
if (arr[1] !== undefined) {}