function callbackfn(val, idx, obj) {
  return obj instanceof Date;
}
var obj = new Date(0);
obj.length = 1;
obj[0] = 1;
var newArr = Array.prototype.filter.call(obj, callbackfn);