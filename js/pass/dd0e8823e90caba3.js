function callbackfn(val, idx, obj) {
  return this.valueOf() === false;
}
var obj = {
  0: 11,
  length: 2
};
var newArr = Array.prototype.filter.call(obj, callbackfn, false);