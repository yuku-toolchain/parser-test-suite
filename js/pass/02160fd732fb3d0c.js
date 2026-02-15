var result = false;
function callbackfn(val, idx, obj) {
  result = this === global;
}
[11].forEach(callbackfn, this);