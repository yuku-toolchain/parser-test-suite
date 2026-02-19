var obj = {};
obj.unshift = Array.prototype.unshift;
obj.length = NaN;
var unshift = obj.unshift(-1);
if (unshift !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -1) {}
obj.length = Number.NEGATIVE_INFINITY;
var unshift = obj.unshift(-7);
if (unshift !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -7) {}
obj.length = 0.5;
var unshift = obj.unshift(-10);
if (unshift !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -10) {}
obj.length = 1.5;
var unshift = obj.unshift(-13);
if (unshift !== 2) {}
if (obj.length !== 2) {}
if (obj["0"] !== -13) {}
obj.length = new Number(0);
var unshift = obj.unshift(-16);
if (unshift !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -16) {}