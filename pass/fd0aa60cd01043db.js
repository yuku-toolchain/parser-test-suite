var accessed = false;
var objDate = new Date(0);
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objDate;
}