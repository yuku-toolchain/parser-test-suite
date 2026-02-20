var result = false;
var objBoolean = new Boolean();
function callbackfn(val, idx, obj) {
  result = this === objBoolean;
}
[11].forEach(callbackfn, objBoolean);