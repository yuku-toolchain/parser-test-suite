var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return '[object JSON]' === Object.prototype.toString.call(obj);
}
JSON.length = 1;
JSON[0] = 1;