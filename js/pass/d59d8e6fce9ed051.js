var result = false;
var objArray = [];
function callbackfn(val, idx, obj) {
  result = this === objArray;
}
[11].forEach(callbackfn, objArray);