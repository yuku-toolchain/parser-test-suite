var obj = {};
obj.pop = Array.prototype.pop;
obj.length = NaN;
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 0) {}
obj.length = Number.POSITIVE_INFINITY;
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 9007199254740990) {}
obj.length = Number.NEGATIVE_INFINITY;
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 0) {}
obj.length = -0;
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 0) {} else {
  if (1 / obj.length !== Number.POSITIVE_INFINITY) {}
}
obj.length = 0.5;
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 0) {}
obj.length = new Number(0);
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 0) {}