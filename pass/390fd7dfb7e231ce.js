foo.prototype = new Array(1, 2, 3);
function foo() {}
var f = new foo();
f.length = 0;
var i = Array.prototype.lastIndexOf.call({
  length: 0
}, 1);