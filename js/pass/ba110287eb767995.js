var obj = {};
obj.pop = Array.prototype.pop;
obj[4294967294] = "x";
obj.length = -1;
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 0) {}
if (obj[4294967294] !== "x") {}