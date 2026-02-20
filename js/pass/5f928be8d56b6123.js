var accessed = false;
var objArray = [];
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objArray;
}