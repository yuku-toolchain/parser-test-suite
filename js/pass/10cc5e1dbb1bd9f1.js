var result = false;
function callbackfn(val, idx, obj) {
  result = this.valueOf() === 101;
}
[11].forEach(callbackfn, 101);