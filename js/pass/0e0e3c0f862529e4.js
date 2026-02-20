var res = false;
function callbackfn(val, idx, obj) {
  return this.res;
}
function foo() {}
foo.prototype.res = true;
var f = new foo();
var srcArr = [1];
var resArr = srcArr.map(callbackfn, f);