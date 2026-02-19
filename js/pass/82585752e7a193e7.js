var obj = {};
obj.shift = Array.prototype.shift;
if (obj.length !== undefined) {} else {
  var shift = obj.shift();
  if (shift !== undefined) {}
  if (obj.length !== 0) {}
}
obj.length = undefined;
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 0) {}
obj.length = null;
var shift = obj.shift();
if (shift !== undefined) {}
if (obj.length !== 0) {}