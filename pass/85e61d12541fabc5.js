var obj = {};
obj.sort = Array.prototype.sort;
obj[0] = "z";
obj[1] = "y";
obj[2] = "x";
obj.length = -4294967294;
if (obj.sort() !== obj) {}
if (obj.length !== -4294967294) {}
if (obj[0] !== "z") {}
if (obj[1] !== "y") {}
if (obj[2] !== "x") {}