foo.prototype = new Array(1, 2, 3);
function foo() {}
var f = new foo();
f.length = 2;
function cb(val) {
  if (val > 2) return true; else return false;
}
var i = f.some(cb);