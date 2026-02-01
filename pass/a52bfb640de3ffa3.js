var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === JSON;
}
var newArr = [11].filter(callbackfn, JSON);