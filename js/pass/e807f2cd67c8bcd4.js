var obj = {};
Error.prototype.value = "Error";
var errObj = new Error();
Object.defineProperty(obj, "property", errObj);