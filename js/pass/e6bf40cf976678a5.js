function callbackfn(val, idx, obj) {
  return this.valueOf() === "hello!";
}
var obj = {
  0: 11,
  length: 2
};
var testResult = Array.prototype.map.call(obj, callbackfn, "hello!");