function callbackfn(val, idx, obj) {
  return obj instanceof Date;
}
var obj = new Date(0);
obj.length = 2;
obj[0] = 11;
obj[1] = 9;