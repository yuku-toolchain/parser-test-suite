var errObj = new Error();
var preCheck = Object.isExtensible(errObj);
Object.seal(errObj);