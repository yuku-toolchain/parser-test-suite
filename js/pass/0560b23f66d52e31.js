var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
}
[11, 9].forEach(callbackfn);