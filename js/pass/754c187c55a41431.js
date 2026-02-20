var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return this.valueOf() === 101;
}
var newArr = [11].filter(callbackfn, 101);