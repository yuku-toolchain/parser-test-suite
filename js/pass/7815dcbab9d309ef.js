var objDate = new Date(0);
function callbackfn(val, idx, obj) {
  return this === objDate;
}