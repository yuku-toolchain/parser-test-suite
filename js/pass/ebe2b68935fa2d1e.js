var obj = {};
obj.reverse = Array.prototype.reverse;
obj[0] = "x";
obj[1] = "y";
obj[2] = "z";
obj.length = -4294967294;
var reverse = obj.reverse();
if (reverse !== obj) {}
if (obj.length !== -4294967294) {}
if (obj[0] !== "x") {}
if (obj[1] !== "y") {}
if (obj[2] !== "z") {}