var accessed = false;
function callbackfn(val, idx, obj) {
  accessed = true;
  return this.valueOf() === "abc";
}
var newArr = [11].filter(callbackfn, "abc");