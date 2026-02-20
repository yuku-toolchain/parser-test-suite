function callbackfn(val, idx, obj) {
  return this === global;
}
var arr = [1];