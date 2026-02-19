var obj = {};
obj.unshift = Array.prototype.unshift;
if (obj.length !== undefined) {} else {
  var unshift = obj.unshift(-1);
  if (unshift !== 1) {}
  if (obj.length !== 1) {}
  if (obj["0"] !== -1) {}
}
obj.length = undefined;
var unshift = obj.unshift(-4);
if (unshift !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -4) {}
obj.length = null;
var unshift = obj.unshift(-7);
if (unshift !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -7) {}