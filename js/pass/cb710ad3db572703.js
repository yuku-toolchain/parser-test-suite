var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return obj instanceof Number;
}
Number.prototype[0] = 1;
Number.prototype.length = 1;