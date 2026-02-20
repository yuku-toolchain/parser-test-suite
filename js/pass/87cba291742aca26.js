var kIndex = [];
function callbackfn(val, idx, obj) {
  if (typeof kIndex[idx] === "undefined") {
    if (idx !== 0 && typeof kIndex[idx - 1] === "undefined") {
      return true;
    }
    kIndex[idx] = 1;
    return false;
  } else {
    return true;
  }
}
var testResult = [11, 12, 13, 14].map(callbackfn);