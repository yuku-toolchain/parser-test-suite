var objBoolean = new Boolean();
function callbackfn(val, idx, obj) {
  return this === objBoolean;
}