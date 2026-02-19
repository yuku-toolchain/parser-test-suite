function callbackfn(val, idx, obj) {
  return this.valueOf() === false;
}
var testResult = [11].map(callbackfn, false);