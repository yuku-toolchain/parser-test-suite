var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return NaN;
}
var newArr = [11].filter(callbackfn);