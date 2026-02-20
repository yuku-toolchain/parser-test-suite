var res = false;
function callbackfn(val, idx, obj) {
  return this.res;
}
function foo() {}
var f = new foo();
f.res = true;
var srcArr = [1];
var resArr = srcArr.map(callbackfn, f);