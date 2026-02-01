var obj = {};
obj.push = Array.prototype.push;
obj.length = NaN;
var push = obj.push(-1);
if (push !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -1) {}
obj.length = Number.POSITIVE_INFINITY;
if (obj.length !== Number.POSITIVE_INFINITY) {}
if (obj[9007199254740991] !== undefined) {}
obj.length = Number.NEGATIVE_INFINITY;
var push = obj.push(-7);
if (push !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -7) {}
obj.length = 0.5;
var push = obj.push(-10);
if (push !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -10) {}
obj.length = 1.5;
var push = obj.push(-13);
if (push !== 2) {}
if (obj.length !== 2) {}
if (obj["1"] !== -13) {}
obj.length = new Number(0);
var push = obj.push(-16);
if (push !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -16) {}