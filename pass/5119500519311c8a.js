var obj = {};
obj.join = Array.prototype.join;
if (obj.length !== undefined) {} else {
  if (obj.join() !== "") {}
  if (obj.length !== undefined) {}
}
obj.length = undefined;
if (obj.join() !== "") {}
if (obj.length !== undefined) {}
obj.length = null;
if (obj.join() !== "") {}
if (obj.length !== null) {}