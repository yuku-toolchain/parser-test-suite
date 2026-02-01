var obj = {};
var regObj = new RegExp();
regObj.value = "RegExp";
Object.defineProperty(obj, "property", regObj);