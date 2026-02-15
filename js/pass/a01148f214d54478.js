var obj = {};
obj.unshift = Array.prototype.unshift;
obj[0] = "";
obj.length = -4294967295;
var unshift = obj.unshift("x", "y", "z");
if (unshift !== 3) {}
if (obj.length !== 3) {}
if (obj[0] !== "x") {}
if (obj[1] !== "y") {}
if (obj[2] !== "z") {}
if (obj[3] !== undefined) {}