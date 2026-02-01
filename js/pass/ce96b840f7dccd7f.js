var obj = {};
obj.splice = Array.prototype.splice;
obj[0] = "x";
obj[4294967295] = "y";
obj.length = 4294967296;
var arr = obj.splice(4294967295, 1);
if (arr.length !== 1) {}
if (obj.length !== 4294967295) {}
if (obj[0] !== "x") {}
if (obj[4294967295] !== undefined) {}
if (arr[0] !== "y") {}