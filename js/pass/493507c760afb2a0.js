var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
}
var result = [].forEach(callbackfn);