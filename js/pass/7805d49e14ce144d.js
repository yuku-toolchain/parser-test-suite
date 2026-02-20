var result = false;
function callbackfn(val, idx, obj) {
  result = this === Math;
}
[11].forEach(callbackfn, Math);