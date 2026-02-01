var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return '[object Math]' === Object.prototype.toString.call(obj);
}
Math.length = 1;
Math[0] = 1;