var obj = {};
obj.push = Array.prototype.push;
obj.length = 4294967296;
var push = obj.push("x", "y", "z");
if (push !== 4294967299) {}
if (obj.length !== 4294967299) {}
if (obj[0] !== undefined) {}
if (obj[1] !== undefined) {}
if (obj[2] !== undefined) {}
if (obj[4294967296] !== "x") {}
if (obj[4294967297] !== "y") {}
if (obj[4294967298] !== "z") {}
var obj = {};
obj.push = Array.prototype.push;
obj.length = 4294967296;
var push = obj.push();
if (push !== 4294967296) {}
if (obj.length !== 4294967296) {}