var obj = {};
obj.push = Array.prototype.push;
if (obj.length !== undefined) {} else {
  var push = obj.push(-1);
  if (push !== 1) {}
  if (obj.length !== 1) {}
  if (obj["0"] !== -1) {}
}
obj.length = undefined;
var push = obj.push(-4);
if (push !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -4) {}
obj.length = null;
var push = obj.push(-7);
if (push !== 1) {}
if (obj.length !== 1) {}
if (obj["0"] !== -7) {}