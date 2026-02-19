var obj = {};
obj.shift = Array.prototype.shift;
obj[0] = "x";
obj[1] = "y";
obj.length = -4294967294;
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 0) {}
if (obj[0] !== "x") {}
if (obj[1] !== "y") {}