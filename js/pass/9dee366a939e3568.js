var res = false;
function callbackfn(val, idx, obj) {
  return this.res;
}
function foo() {}
foo.res = true;
var arr = [1];