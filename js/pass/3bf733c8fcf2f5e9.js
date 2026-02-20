var objRegExp = new RegExp();
function callbackfn(val, idx, obj) {
  return this === objRegExp;
}