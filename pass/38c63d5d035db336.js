var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return obj instanceof Boolean;
}
Boolean.prototype[0] = 1;
Boolean.prototype.length = 1;