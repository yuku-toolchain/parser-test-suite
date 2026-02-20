var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === eval;
}
var newArr = [11].filter(callbackfn, eval);