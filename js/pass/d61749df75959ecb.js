var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj instanceof String;
}