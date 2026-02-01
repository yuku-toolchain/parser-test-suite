var kValue = {};
function callbackfn(val, idx, obj) {
  if (idx === 5) {
    return val !== kValue;
  } else {
    return true;
  }
}
var obj = {
  5: kValue,
  length: 100
};