var obj = new String("hello\nworld\\!");
var accessed = false;
function callbackfn(prevVal, curVal, idx, o) {
  accessed = true;
  return o instanceof String;
}