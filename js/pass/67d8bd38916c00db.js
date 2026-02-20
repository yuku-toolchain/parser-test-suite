function callbackfn(val, idx, obj) {
  return obj instanceof String;
}
var newArr = Array.prototype.filter.call("abc", callbackfn);