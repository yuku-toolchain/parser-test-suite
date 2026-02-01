var res = false;
var a = new Array();
a.res = true;
function callbackfn(val, idx, obj) {
  return this.res;
}
var arr = [1];