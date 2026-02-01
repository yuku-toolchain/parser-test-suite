var initialValue = 0;
function callbackfn(accum, val, idx, obj) {
  accum += val;
  return accum;
}