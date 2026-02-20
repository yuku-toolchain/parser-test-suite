var accessed = false;
var objRegExp = new RegExp();
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objRegExp;
}
var newArr = [11].filter(callbackfn, objRegExp);