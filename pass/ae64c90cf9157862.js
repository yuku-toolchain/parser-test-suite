var result = false;
function callbackfn(val, idx, obj) {
  result = this.valueOf() === false;
}
[11].forEach(callbackfn, false);