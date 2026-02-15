var result = false;
function callbackfn(val) {
  result = val > 10;
}
[11].forEach(callbackfn);