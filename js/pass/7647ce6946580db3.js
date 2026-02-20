var res = false;
var o = new Object();
o.res = true;
function callbackfn(val, idx, obj) {
  return this.res;
}
var srcArr = [1];
var resArr = srcArr.map(callbackfn, o);