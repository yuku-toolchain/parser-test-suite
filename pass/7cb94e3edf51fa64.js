function foo() {}
var o = {};
var bf = foo.bind(o);
var ex = Object.isExtensible(bf);