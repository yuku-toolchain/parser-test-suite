var x = [0, 1, 2, 3, 4];
var arr = x.slice(0, -5);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 0) {}
if (arr[0] !== undefined) {}