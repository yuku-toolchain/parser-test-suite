function callbackfn(val, idx, obj) {
  return '[object Math]' === Object.prototype.toString.call(obj);
}
Math.length = 1;
Math[0] = 1;
var testResult = Array.prototype.map.call(Math, callbackfn);