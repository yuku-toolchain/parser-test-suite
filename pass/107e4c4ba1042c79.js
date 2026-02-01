var kValue = 'abc';
function callbackfn(val, idx, obj) {
  if (idx === 5) {
    return val !== kValue;
  } else {
    return true;
  }
}
var proto = {
  5: kValue
};
var Con = function () {};
Con.prototype = proto;
var child = new Con();
child.length = 10;