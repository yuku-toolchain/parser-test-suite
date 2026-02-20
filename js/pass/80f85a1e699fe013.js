function callbackfn(val, idx, obj) {
  return '[object JSON]' === Object.prototype.toString.call(JSON);
}
JSON.length = 1;
JSON[0] = 1;
var newArr = Array.prototype.filter.call(JSON, callbackfn);