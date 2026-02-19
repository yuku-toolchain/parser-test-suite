var result = false;
function callbackfn(val, idx, obj) {
  result = obj.length === 2;
}
[12, 11].forEach(callbackfn);