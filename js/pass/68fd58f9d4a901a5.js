var obj = {
  0: 0,
  1: 1
};
obj.length = 2;
obj.splice = Array.prototype.splice;
var arr = obj.splice(-2, -1, 2, 3);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 0) {}
if (obj.length !== 4) {}
if (obj[0] !== 2) {}
if (obj[1] !== 3) {}
if (obj[2] !== 0) {}
if (obj[3] !== 1) {}
if (obj[4] !== undefined) {}