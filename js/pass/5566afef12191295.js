function foo() {}
var b = foo.bind(33, 44);
foo.apply = function () {};
b(55, 66);