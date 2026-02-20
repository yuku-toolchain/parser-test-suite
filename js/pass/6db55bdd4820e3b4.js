var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return 0;
}