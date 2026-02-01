var iter = {};
iter[Symbol.iterator] = function () {};
var f = function ([x] = iter) {};