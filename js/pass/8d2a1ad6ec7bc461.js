function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof Number;
}
Number.prototype[0] = 1;
Number.prototype.length = 1;