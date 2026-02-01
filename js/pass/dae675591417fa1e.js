var arr = [];
var result = arr.copyWithin(0, 0);
var o = {
  length: 0
};
result = Array.prototype.copyWithin.call(o, 0, 0);