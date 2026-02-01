var obj = {};
obj.join = Array.prototype.join;
obj.length = 4.5;
if (obj.join() !== ",,,") {}
obj[0] = undefined;
obj[1] = 1;
obj[2] = null;
if (obj.join() !== ",1,,") {}
if (obj.length !== 4.5) {}
var obj = {};
obj.join = Array.prototype.join;
var x = new Number(4.5);
obj.length = x;
if (obj.join() !== ",,,") {}
obj[0] = undefined;
obj[1] = 1;
obj[2] = null;
if (obj.join() !== ",1,,") {}
if (obj.length !== x) {}