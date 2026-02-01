function callbackfn(prevVal, curVal, idx, obj) {
  if (idx + 1 < obj.length && obj[idx] === curVal && obj[idx + 1] === prevVal) return curVal; else return false;
}
var arr = [0, 1, true, null, new Object(), "five"];