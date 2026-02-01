var result = false;
function callbackfn(val, idx, obj) {
  result = this.valueOf() === "abc";
}
[11].forEach(callbackfn, "abc");