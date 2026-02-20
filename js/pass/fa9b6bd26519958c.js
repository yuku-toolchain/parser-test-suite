var obj = {};
obj.length = "10";
obj.reverse = Array.prototype.reverse;
obj[0] = true;
obj[2] = Infinity;
obj[4] = undefined;
obj[5] = undefined;
obj[8] = "NaN";
obj[9] = "-1";
var reverse = obj.reverse();
if (reverse !== obj) {}
if (obj[0] !== "-1") {}
if (obj[1] !== "NaN") {}
if (obj[2] !== undefined) {}
if (obj[3] !== undefined) {}
if (obj[4] !== undefined) {}
if (obj[5] !== undefined) {}
if (obj[6] !== undefined) {}
if (obj[7] !== Infinity) {}
if (obj[8] !== undefined) {}
if (obj[9] !== true) {}
obj.length = new String("9");
var reverse = obj.reverse();
if (reverse !== obj) {}
if (obj[0] !== undefined) {}
if (obj[1] !== Infinity) {}
if (obj[2] !== undefined) {}
if (obj[3] !== undefined) {}
if (obj[4] !== undefined) {}
if (obj[5] !== undefined) {}
if (obj[6] !== undefined) {}
if (obj[7] !== "NaN") {}
if (obj[8] !== "-1") {}