function callbackfn(val, idx, obj) {
  return !(obj instanceof String);
}
var obj = new String("hello\nworld\\!");