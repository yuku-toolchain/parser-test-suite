var obj = {};
obj.pop = Array.prototype.pop;
obj.length = 2.5;
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 1) {}
obj.length = new Number(2);
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 1) {}