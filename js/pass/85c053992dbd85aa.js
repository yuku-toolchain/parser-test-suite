var accessed = false;
var str = new String("432");
function callbackfn(preVal, curVal, idx, obj) {
  accessed = true;
  return obj.length === 3;
}
String.prototype[3] = "1";