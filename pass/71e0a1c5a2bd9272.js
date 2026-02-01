function callbackfn(val, idx, obj) {
  return this.valueOf() === "abc";
}
var testResult = [11].map(callbackfn, "abc");