var obj = {};
obj.push = Array.prototype.push;
obj.length = 4294967295;
var push = obj.push("x", "y", "z");
if (push !== 4294967298) {}
if (obj.length !== 4294967298) {}
if (obj[4294967295] !== "x") {}
if (obj[4294967296] !== "y") {}
if (obj[4294967297] !== "z") {}