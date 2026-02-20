function callbackfn(val, idx, obj) {
  return obj.length === 3;
}
var str = new String("012");
var newArr = Array.prototype.filter.call(str, callbackfn);