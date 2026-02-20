var accessed = false;
var objString = new String();
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objString;
}
var newArr = [11].filter(callbackfn, objString);