function callbackfn(val, idx, obj) {
  return obj instanceof Boolean;
}
var obj = new Boolean(true);
obj.length = 2;
obj[0] = 11;
obj[1] = 12;
var newArr = Array.prototype.filter.call(obj, callbackfn);