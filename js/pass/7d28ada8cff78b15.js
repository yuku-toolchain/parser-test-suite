var obj = {};
var errObj = new Error();
errObj.value = "Error";
Object.defineProperty(obj, "property", errObj);