var arr = [];
var result = arr.fill(1);
var o = {
  length: 0
};
result = Array.prototype.fill.call(o);