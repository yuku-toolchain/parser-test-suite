function callbackfn(val, idx, obj) {
  return obj instanceof Error;
}
var obj = new Error();
obj.length = 1;
obj[0] = 1;
var testResult = Array.prototype.map.call(obj, callbackfn);