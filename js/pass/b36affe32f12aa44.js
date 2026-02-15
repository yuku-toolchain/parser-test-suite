var x = [0, 1, 2, 3, 4];
var arr = x.slice({
  valueOf: function () {
    return 0;
  },
  toString: function () {
    return 3;
  }
}, 3);
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {}
if (arr.length !== 3) {}
if (arr[0] !== 0) {}
if (arr[1] !== 1) {}
if (arr[2] !== 2) {}
if (arr[3] !== undefined) {}