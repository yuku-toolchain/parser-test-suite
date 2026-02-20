function callbackfn(val, idx, obj) {
  return obj instanceof String;
}
var obj = new String("abc");
var newArr = Array.prototype.filter.call(obj, callbackfn);