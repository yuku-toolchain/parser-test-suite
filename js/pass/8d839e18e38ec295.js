function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof RegExp;
}
var obj = new RegExp();
obj.length = 1;
obj[0] = 1;