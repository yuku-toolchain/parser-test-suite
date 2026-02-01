var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return "non-empty string";
}