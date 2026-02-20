var obj = {};
obj.join = Array.prototype.join;
obj.length = NaN;
if (obj.join() !== "") {}
obj.length = Number.NEGATIVE_INFINITY;
if (obj.join() !== "") {}
if (obj.length !== Number.NEGATIVE_INFINITY) {}
obj.length = -0;
if (obj.join() !== "") {}
if (obj.length !== -0) {} else {
  if (1 / obj.length !== Number.NEGATIVE_INFINITY) {}
}
obj.length = 0.5;
if (obj.join() !== "") {}
if (obj.length !== 0.5) {}
var x = new Number(0);
obj.length = x;
if (obj.join() !== "") {}
if (obj.length !== x) {}