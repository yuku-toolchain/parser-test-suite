var accessed = false;
var objArray = new Array(10);
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objArray;
}
var newArr = [11].filter(callbackfn, objArray);