var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return "";
}
var newArr = [11].filter(callbackfn);