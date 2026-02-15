function Foo() {}
Foo.prototype = [1, 2, 3];
var f = new Foo();
f.length = [];
function cb() {}
var a = Array.prototype.map.call(f, cb);