var accessed = false;
var objRegExp = new RegExp();
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objRegExp;
}