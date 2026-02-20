function callbackfn(val, idx, obj) {
  return val > 10;
}
var obj = {
  length: "asdf!_"
};
var newArr = Array.prototype.map.call(obj, callbackfn);