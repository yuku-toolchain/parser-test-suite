var fun = function () {};
var preCheck = Object.isExtensible(fun);
Object.seal(fun);