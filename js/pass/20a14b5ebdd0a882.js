var accessed = false;
var objNumber = new Number();
function callbackfn(val, idx, obj) {
  accessed = true;
  return this === objNumber;
}
var newArr = [11].filter(callbackfn, objNumber);