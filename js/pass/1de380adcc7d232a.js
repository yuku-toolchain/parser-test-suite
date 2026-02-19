var toJSON = Date.prototype.toJSON;
var num = new Number(-Infinity);
num.toISOString = function () {};