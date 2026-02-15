foo.prototype = new Array(1, 2, 3);
function foo() {}
var f = new foo();
f.length = 1;
function cb() {}
var a = f.map(cb);