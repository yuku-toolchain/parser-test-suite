var result = false;
function callbackfn(val, idx, obj) {
  result = obj instanceof String;
}
Array.prototype.forEach.call("abc", callbackfn);