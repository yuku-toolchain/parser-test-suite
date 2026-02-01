var accessed = false;
var objBoolean = new Boolean();
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objBoolean;
}