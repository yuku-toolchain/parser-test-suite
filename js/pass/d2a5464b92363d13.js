var obj = {};
obj.push = Array.prototype.push;
obj.length = -1;
var push = obj.push("x", "y", "z");
if (push !== 3) {}
if (obj.length !== 3) {}
if (obj[4294967295] !== undefined) {}
if (obj[4294967296] !== undefined) {}
if (obj[4294967297] !== undefined) {}
if (obj[0] !== "x") {}
if (obj[1] !== "y") {}
if (obj[2] !== "z") {}