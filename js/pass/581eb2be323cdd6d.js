var obj = {};
obj.pop = Array.prototype.pop;
obj[0] = "x";
obj[4294967296] = "y";
obj.length = 4294967297;
var pop = obj.pop();
if (pop !== "y") {}
if (obj.length !== 4294967296) {}
if (obj[0] !== "x") {}
if (obj[4294967296] !== undefined) {}