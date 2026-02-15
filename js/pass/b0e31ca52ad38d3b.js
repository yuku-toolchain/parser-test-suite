var result = false;
var objDate = new Date(0);
function callbackfn(val, idx, obj) {
  result = this === objDate;
}
[11].forEach(callbackfn, objDate);