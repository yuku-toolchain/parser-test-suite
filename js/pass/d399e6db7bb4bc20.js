function callbackfn(val, idx, o) {
  return 5 === this.valueOf();
}
var obj = {
  0: 11,
  length: 2
};
var newArr = Array.prototype.filter.call(obj, callbackfn, 5);