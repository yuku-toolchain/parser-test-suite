var obj = {};
obj.shift = Array.prototype.shift;
obj.length = 2.5;
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 1) {}
obj.length = new Number(2);
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 1) {}