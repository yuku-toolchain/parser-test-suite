var obj = new Error();
obj.length = 1;
obj[0] = 1;
var accessed = false;
function callbackfn(prevVal, curVal, idx, o) {
  accessed = true;
  return o instanceof Error;
}