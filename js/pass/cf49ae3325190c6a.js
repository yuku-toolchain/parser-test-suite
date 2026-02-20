var obj = {};
obj.pop = Array.prototype.pop;
obj[0] = "x";
obj[4294967295] = "y";
obj.length = 4294967296;
var pop = obj.pop();
if (pop !== "y") {}
if (obj.length !== 4294967295) {}
if (obj[0] !== "x") {}
if (obj[4294967295] !== undefined) {}