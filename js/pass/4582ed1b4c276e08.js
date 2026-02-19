var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return this.valueOf() === false;
}
var newArr = [11].filter(callbackfn, false);