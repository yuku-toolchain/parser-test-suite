var obj = new Boolean(true);
obj.length = 2;
obj[0] = 11;
obj[1] = 12;
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj instanceof Boolean;
}