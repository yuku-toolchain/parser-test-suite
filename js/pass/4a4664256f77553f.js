var obj = {};
obj.shift = Array.prototype.shift;
obj.length = NaN;
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 0) {}
obj.length = Number.NEGATIVE_INFINITY;
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 0) {}
obj.length = -0;
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 0) {} else {
  if (1 / obj.length !== Number.POSITIVE_INFINITY) {}
}
obj.length = 0.5;
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 0) {}
obj.length = new Number(0);
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 0) {}