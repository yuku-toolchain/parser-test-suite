var fn = function () {};
var reg = new FinalizationRegistry(fn);
var target = Symbol('a description');