var iter = {};
iter[Symbol.iterator] = function () {};
var f = async function* ([x] = iter) {};