foo.prototype = new Array(1, 2, 3);
function foo() {}
var f = new foo();
f.length = [];
function cb() {}