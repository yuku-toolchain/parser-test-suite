var res = false;
var o = new Object();
o.res = true;
function callbackfn(val, idx, obj) {
  return this.res;
}
var arr = [1];