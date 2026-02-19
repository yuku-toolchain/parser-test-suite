var res = false;
var a = new Array();
a.res = true;
var result;
function callbackfn(val, idx, obj) {
  result = this.res;
}
var arr = [1];
arr.forEach(callbackfn, a);