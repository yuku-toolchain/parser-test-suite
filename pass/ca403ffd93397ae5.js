var obj = {
  0: 0,
  1: 1,
  2: 2,
  3: 3
};
obj.length = 4;
obj.splice = Array.prototype.splice;
var arr = obj.splice(-4, 3, 4, 5);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 3) {}
if (arr[0] !== 0) {}
if (arr[1] !== 1) {}
if (arr[2] !== 2) {}
if (obj.length !== 3) {}
if (obj[0] !== 4) {}
if (obj[1] !== 5) {}
if (obj[2] !== 3) {}
if (obj[3] !== undefined) {}