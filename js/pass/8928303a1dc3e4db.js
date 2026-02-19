function callbackfn(val, idx, obj) {
  return val < 10;
}
var obj = {
  0: 11,
  1: 9,
  length: {
    valueOf: function () {
      return 2;
    }
  }
};
var newArr = Array.prototype.map.call(obj, callbackfn);