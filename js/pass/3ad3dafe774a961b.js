function callbackfn(val, idx, obj) {
  return obj instanceof RegExp;
}
var obj = new RegExp();
obj.length = 2;
obj[0] = 11;
obj[1] = 9;