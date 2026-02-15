var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj instanceof Boolean;
}
Boolean.prototype[0] = 1;
Boolean.prototype.length = 1;