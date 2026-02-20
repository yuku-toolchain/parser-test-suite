function callbackfn(prevVal, curVal, idx, obj) {
  return obj instanceof String;
}
var obj = new String("abc");