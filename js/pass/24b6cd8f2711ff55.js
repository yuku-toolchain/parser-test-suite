var objNumber = new Number();
function callbackfn(val, idx, obj) {
  return this === objNumber;
}