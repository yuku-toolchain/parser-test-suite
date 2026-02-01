var obj = {};
obj.pop = Array.prototype.pop;
if (obj.length !== undefined) {} else {
  var pop = obj.pop();
  if (pop !== undefined) {}
  if (obj.length !== 0) {}
}
obj.length = undefined;
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 0) {}
obj.length = null;
var pop = obj.pop();
if (pop !== undefined) {}
if (obj.length !== 0) {}