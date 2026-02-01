var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return obj instanceof Number;
}
var obj = new Number(-128);
obj.length = 2;
obj[0] = 11;
obj[1] = 12;