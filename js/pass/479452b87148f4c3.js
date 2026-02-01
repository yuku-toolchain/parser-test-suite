var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === global;
}
var newArr = [11].filter(callbackfn, global);