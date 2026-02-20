function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof Boolean;
}
Boolean.prototype[0] = true;
Boolean.prototype.length = 1;