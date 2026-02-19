var obj = {};
obj.splice = Array.prototype.splice;
obj[4294967294] = "x";
obj.length = -1;
var arr = obj.splice(4294967294, 1);
if (arr.length !== 0) {}
if (arr[0] !== undefined) {}
if (obj.length !== 0) {}
if (obj[4294967294] !== "x") {}