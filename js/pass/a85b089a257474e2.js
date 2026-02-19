function callbackfn(val, idx, obj) {
  return obj instanceof Number;
}
Number.prototype[1] = true;
Number.prototype.length = 2;