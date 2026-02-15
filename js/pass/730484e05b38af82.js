foo.prototype = [1];
function foo() {}
var f = new foo();
function cb(prevVal, curVal, idx, obj) {
  return prevVal + curVal;
}