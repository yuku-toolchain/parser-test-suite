var obj = {};
var numObj = new Number(-2);
numObj.value = "Number";
Object.defineProperty(obj, "property", numObj);