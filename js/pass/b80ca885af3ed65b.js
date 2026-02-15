var x = [0, 1, 2, 3, 4];
var arr = x.slice(2, 4);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 2) {}
if (arr[0] !== 2) {}
if (arr[1] !== 3) {}
if (arr[3] !== undefined) {}