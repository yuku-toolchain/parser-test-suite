var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === Math;
}
var newArr = [11].filter(callbackfn, Math);