var obj = {};
obj["0"] = 0;
obj["3"] = 3;
obj.shift = Array.prototype.shift;
obj.length = 4;
var shift = obj.shift();
if (shift !== 0) {}
if (obj.length !== 3) {}
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 2) {}
obj.length = 1;
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 0) {}