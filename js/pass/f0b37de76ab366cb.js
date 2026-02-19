var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return curVal > 10;
}