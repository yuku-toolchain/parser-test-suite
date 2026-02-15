var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return obj instanceof Boolean;
}
var obj = new Boolean(true);
obj.length = 2;
obj[0] = 11;
obj[1] = 12;