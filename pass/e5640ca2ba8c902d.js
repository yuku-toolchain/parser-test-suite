var accessed = false;
var objBoolean = new Boolean();
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objBoolean;
}
var newArr = [11].filter(callbackfn, objBoolean);