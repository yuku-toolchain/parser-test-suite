var res = false;
function callbackfn(val, idx, obj) {
  return this.res;
}
function foo() {}
foo.prototype.res = true;
var f = new foo();
var arr = [1];