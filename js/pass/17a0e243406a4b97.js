var obj = {};
RegExp.prototype.value = "RegExp";
var regObj = new RegExp();
Object.defineProperty(obj, "property", regObj);