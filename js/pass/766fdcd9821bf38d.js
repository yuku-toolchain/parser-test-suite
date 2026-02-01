var res = false;
var a = new Array();
a.res = true;
function callbackfn(val, idx, obj) {
  return this.res;
}
var srcArr = [1];
var resArr = srcArr.filter(callbackfn, a);