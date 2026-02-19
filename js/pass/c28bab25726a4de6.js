function callbackfn(val, idx, obj) {
  return obj instanceof Boolean;
}
Boolean.prototype[0] = 1;
Boolean.prototype.length = 1;