var objString = new String();
function callbackfn(val, idx, obj) {
  return this === objString;
}