function callbackfn(val, idx, obj) {
  return '[object Math]' === Object.prototype.toString.call(obj);
}
Math.length = 1;
Math[0] = 1;
var newArr = Array.prototype.filter.call(Math, callbackfn);