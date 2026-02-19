var x = [0, 1, 2, 3, 4];
var arr = x.slice(3, 5);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 2) {}
if (arr[0] !== 3) {}
if (arr[1] !== 4) {}
if (arr[3] !== undefined) {}