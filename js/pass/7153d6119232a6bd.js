var obj = {};
obj.slice = Array.prototype.slice;
obj[0] = 0;
obj[1] = 1;
obj[2] = 2;
obj[3] = 3;
obj[4] = 4;
obj.length = 5;
var arr = obj.slice(0, 3);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 3) {}
if (arr[0] !== 0) {}
if (arr[1] !== 1) {}
if (arr[2] !== 2) {}
if (arr[3] !== undefined) {}