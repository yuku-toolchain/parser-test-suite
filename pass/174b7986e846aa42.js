var obj = new Date(0);
obj.length = 1;
obj[0] = 1;
var accessed = false;
function callbackfn(prevVal, curVal, idx, obj) {
  accessed = true;
  return obj instanceof Date;
}