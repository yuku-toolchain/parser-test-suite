var objArray = [];
function callbackfn(val, idx, obj) {
  return this === objArray;
}