var obj = {};
obj.slice = Array.prototype.slice;
obj[4294967294] = "x";
obj.length = -1;
var arr = obj.slice(4294967294, 4294967295);
if (arr.length !== 0) {}
if (arr[0] !== undefined) {}